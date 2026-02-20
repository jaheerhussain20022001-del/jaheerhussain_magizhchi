<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="opertorjs.js"></script>
</body>
</html
  <!--opertorjs.js  -->
  let arr = [];

function insertElement() {
  let el = prompt("Enter element to insert:");
  arr.push(el);
  console.log("Inserted:", el);
}

function deleteElement() {
  let el = prompt("Enter element to delete:");
  let index = arr.indexOf(el);
  if (index !== -1) {
    arr.splice(index, 1);
    console.log("Deleted:", el);
  } else {
    console.log("Element not found");
  }
}

function searchElement() {
  let el = prompt("Enter element to search:");
  let index = arr.indexOf(el);
  if (index !== -1) {
    console.log("Element found at position:", index);
  } else {
    console.log("Element not found");
  }
}

function displayArray() {
  console.log("Array elements:", arr.join(" "));
}


while (true) {
  let choice = prompt(
    "MENU:\n1.Insert\n2.Delete\n3.Search\n4.Display\n5.Exit\nEnter choice:"
  );

  switch (choice) {
    case "1":
      insertElement();
      break;
    case "2":
      deleteElement();
      break;
    case "3":
      searchElement();
      break;
    case "4":
      displayArray();
      break;
    case "5":
      console.log("Program exited");
      break;
    default:
      console.log("Invalid choice");
  }

  if (choice === "5") break;
}
