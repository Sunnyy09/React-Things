import React from "react";

function AddPost({ addNewPost }) {
  return (
    <div className="mt-8 w-full">
      <div className="flex w-full justify-center items-center">
        <div className="w-96 flex items-center flex-col gap-6">
          <textarea
            cols="30"
            rows="5"
            className="border-2 px-1 w-full ouline-none border-black"
          ></textarea>
          <button
            onClick={addNewPost}
            className="bg-blue-500 text-white font-bold py-2 px-4 w-full hover:bg-blue-600"
          >
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
