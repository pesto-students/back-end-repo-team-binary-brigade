import Post from "../models/post.model";

const postService = {
  find: async (query) => {
    const { skip, limit, sort, user_id, college_id } = query;

    delete query.skip;
    delete query.limit;
    delete query.sort;

    // return await Post.find(query)
    //   .skip(skip)
    //   .limit(limit)
    //   .populate("user_id", "name avatar avatar_bg_color")
    //   .populate("college_id", "name")
    //   .sort(sort);

    return await Post.aggregate([
      // Add a $match stage to filter posts by college_id if it exists
      ...(college_id
        ? [
            {
              $match: {
                $expr: {
                  $eq: ["$college_id", { $toObjectId: college_id }],
                },
              },
            },
          ]
        : []),
      // Add a $match stage to filter posts by user_id if it exists
      ...(user_id
        ? [
            {
              $match: {
                $expr: {
                  $eq: ["$user_id", { $toObjectId: user_id }],
                },
              },
            },
          ]
        : []),
      // get active post only
      {
        $match: {
          $expr: {
            $eq: ["$status", 1],
          },
        },
      },
      {
        $lookup: {
          from: "postLike", // The name of the 'postLike' collection in the database
          localField: "_id",
          foreignField: "post_id", // The field in the 'postLike' collection that references the '_id' of the 'Post' collection
          as: "likes",
        },
      },
      {
        $lookup: {
          from: "postComment",
          localField: "_id",
          foreignField: "post_id",
          as: "comments",
        },
      },
      {
        $addFields: {
          likesCount: { $size: "$likes" }, // Count the number of likes for each post
          commentsCount: { $size: "$comments" },
        },
      },
      {
        $lookup: {
          from: "users", // The name of the 'users' collection in the database
          localField: "user_id",
          foreignField: "_id", // The field in the 'users' collection that references the '_id' of the 'Post' collection
          as: "user",
        },
      },
      {
        $unwind: "$user", // Flatten the 'user' array created by the $lookup stage
      },
      {
        $project: {
          "user.password": 0, // Exclude the 'password' field from the 'user' object
          "user.email": 0, // Exclude the 'email' field from the 'user' object
          "user.createdAt": 0,
          "user.updatedAt": 0,
          "user.__v": 0,
        },
      },
      {
        $lookup: {
          from: "colleges", // The name of the 'colleges' collection in the database
          localField: "college_id",
          foreignField: "_id", // The field in the 'colleges' collection that references the '_id' of the 'Post' collection
          as: "college",
        },
      },
      {
        $unwind: "$college", // Flatten the 'college' array created by the $lookup stage
      },
      {
        $project: {
          "college.images": 0,
          "college.description": 0,
          "college.number_of_student": 0,
          "college.number_of_faculty": 0,
          "college.number_of_streams": 0,
          "college.status": 0,
          "college.createdAt": 0,
          "college.updatedAt": 0,
          "college.__v": 0,
        },
      },
      {
        $skip: Number(skip),
      },
      {
        $limit: Number(limit),
      },
      {
        $sort: sort, // Sort the posts in descending order based on likesCount
      },
      {
        $project: {
          likes: 0, // Exclude the 'likes' field from the result
          comments: 0,
          user_id: 0,
          college_id: 0,
          updatedAt: 0,
          status: 0,
          __v: 0,
        },
      },
    ]);
  },

  get: async (id) => {
    return await Post.findById(id);
  },

  create: async (data) => {
    const newPost = new Post(data);
    const savedPost = await newPost.save();
    return savedPost;
  },

  update: async (id, data) => {
    return await Post.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await Post.findByIdAndDelete(id);
  },
};

export default postService;
