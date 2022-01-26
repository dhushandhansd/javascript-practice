import { Schema } from "mongoose";

const schema = new Schema(
  {
    title: { type: String, required: true },
    authorId: { type: String, required: true },
    authorName: { type: String, required: false },
    email: { type: String, required: false },
    tags: [
      {
        name: { type: String, required: false },
      },
    ],
    place: { type: String, required: false },
    location: {
      type: { type: String },
      coordinates: [Number],
      required: false,
    },
    content: { type: String, required: false, text: true },
    category: { type: String, required: false },
    thumbnails: [
      {
        path: { type: String, required: false },
        createdAt: { type: Date, required: false },
        updatedAt: { type: Date, required: false },
        deviceType: {
          type: String,
          required: false,
          enum: ["web", "mobile", "tablet"],
        },
      },
    ],
    video: {
      title: { type: String, required: false },
      creditedBy: { type: String, required: false },
    },
    soundClips: {
      title: { type: String, required: false },
      creditedBy: { type: String, required: false },
    },

    status: {
      type: String,
      required: true,
      default: "active",
      enum: ["active", "inactive"],
    },
    isActive: { type: Boolean, required: true, default: true },
    accessType: {
      type: String,
      required: true,
      default: "private",
      enum: ["public", "private"],
    },
    isPrivate: { type: Boolean, required: true, default: true },
    contributors: [
      {
        userId: { type: String, required: true },
        userAccess: {
          type: String,
          required: true,
          enum: ["viewer", "editor"],
        },
      },
    ],
    noteBookId: { type: ObjectId, required: false },
  },
  { timestamps: true }
);

/***
 * Title
 * Author Name
 * Email
 * Place
 * Location
 * Category
 * Pictures
 * Sound Clips
 * Videos
 *
 */
