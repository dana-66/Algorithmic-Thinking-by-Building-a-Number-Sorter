const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();
    //   all the dropdown values share the same class
    //   const inputValues = document.getElementsByClassName("values-dropdown");
    // using the spread operator to add the elements into an array
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map(dropdown => Number(dropdown.value));
    // const sortedValues = bubbleSort(inputValues);
    // const sortedValues = selectionSort(inputValues);
    // const sortedValues = insertionSort(inputValues);
    const sortedValues = inputValues.sort((a, b) => { return a - b });  //built-in method
    updateUI(sortedValues);
}

//  function to update the display with the sorted numbers.
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
};

// bubble sort :
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        // to iterate inside the loop we nest it
        for (let j = 0; j < array.length - 1; j++) {

            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};

// Selection Sort:
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
};

// insertion Sort
const insertionSort = (array) => {
    // create a for loop that starts at the second element in the array
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] >= currValue) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currValue;
    }
    return array;
};

sortButton.addEventListener("click", sortInputArray);