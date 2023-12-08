import React from 'react'

function Github() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src="https://placekitten.com/300/200"
      alt="Card"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Card Title</div>
      <p className="text-gray-700 text-base">
        This is the content of the card. You can add more details here.
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #Tag1
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #Tag2
      </span>
      {/* Add more tags if needed */}
    </div>
  </div>
);

}

export default Github