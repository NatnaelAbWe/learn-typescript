// fetch data

// we can use Axios and react Query to fetch data in types
// but also we can use fetchData function to faetch data in

const url = "https://www.course-api.com/react-tours-project";

interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);

    // check if the response is ok
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data as T;
  } catch (err) {
    const errMessage =
      err instanceof Error
        ? err.message
        : "there is an error while fetching data";
    console.log(errMessage);
    throw errMessage;
  }
}

async function main() {
  const data = await fetchData<Tour[]>(url);

  data.map((tour) => {
    console.log(tour.name + "\n");
    console.log(tour.info);
    console.log("====================================================");
  });
}

main();
