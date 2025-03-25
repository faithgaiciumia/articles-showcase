export default function RecipeDeets() {
  return (
    <div className="bg-white w-[95%] mx-auto p-8 shadow-lg rounded-xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-[50%] text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">Chapati</h2>
          <p className="text-gray-500 text-lg mt-2">⏳ Prep Time: 10 minutes</p>
        </div>
        <div className="w-[80%] md:w-[50%] mt-6 md:mt-0">
          <img
            src="https://images.pexels.com/photos/22735421/pexels-photo-22735421.jpeg"
            alt="recipe-image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Ingredients & Instructions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ingredients List */}
        <div>
          <h3 className="text-2xl font-semibold text-amber-600 mb-4">
            🥣 Ingredients
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>2 cups all-purpose flour</li>
            <li>1 tablespoon vegetable oil</li>
            <li>3/4 cup warm water</li>
            <li>1/2 teaspoon salt</li>
            <li>1/2 teaspoon sugar (optional)</li>
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h3 className="text-2xl font-semibold text-amber-600 mb-4">
            👨‍🍳 Instructions
          </h3>
          <ol className="list-decimal pl-5 text-gray-700 space-y-4">
            <li>
              <p className="font-semibold">Step 1: Mix Ingredients</p>
              <p>
                In a bowl, mix flour, salt, and sugar. Add oil and gradually
                pour in warm water.
              </p>
            </li>
            <li>
              <p className="font-semibold">Step 2: Knead the Dough</p>
              <p>
                Knead for about 8-10 minutes until soft. Cover and let it rest
                for 30 minutes.
              </p>
            </li>
            <li>
              <p className="font-semibold">Step 3: Divide & Roll</p>
              <p>
                Divide dough into equal balls. Roll each into a thin, round
                shape.
              </p>
            </li>
            <li>
              <p className="font-semibold">Step 4: Cook the Chapati</p>
              <p>
                Heat a pan over medium heat. Cook each chapati for 1-2 minutes
                per side, brushing with oil.
              </p>
            </li>
            <li>
              <p className="font-semibold">Step 5: Serve & Enjoy</p>
              <p>Stack warm chapatis and serve with your favorite dish!</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
