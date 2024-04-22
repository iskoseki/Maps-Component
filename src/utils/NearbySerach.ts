import Places from "google-places-web";

export const NearbySearch = () => {
    try {
  const apiKey = "AIzaSyAWnhX7rHPtCeYEjGxt8U19b15Popb1NuY";
  if (!apiKey) {
    throw new Error('Missing PLACES_API_KEY env variable');
  }

  Places.apiKey = apiKey;
  Places.debug = true;

  // eslint-disable-next-line no-inner-declarations
  async function run() {
    try {
      const response = await Places.nearbysearch({
        location: '-37.814,144.96332',
        radius: 5000
      });

      console.log('Example Nearby Result', response);
    } catch (error) {
      console.log('Error', error);
    }
  }

  run();
} catch (error) {
  if (error.message === 'Missing PLACES_API_KEY env variable') {
    console.log(error.message);
    console.log('\tTo run the example:');
    console.log('\tPLACES_API_KEY=<your_key_here> node places-example.js');
  } else {
    console.log(error);
  }
}

}