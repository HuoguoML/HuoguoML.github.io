/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import React from 'react'


export default function Footer() {
    return (
        <>
            <div className="mt-12 border-t border-gray-200 py-8 ">
                <p className="text-base text-gray-400 text-center">
                    &copy; 2021 HuoguoML, Inc. All rights reserved.
                </p>
            </div>
        </>
    )
}
