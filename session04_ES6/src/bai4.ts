const handleUnionType = (value: string | number): void => {
  if (typeof value === "string") {
    console.log(`${value.length} ký tự`);
  } else if (typeof value === "number") {
    console.log(value % 2 === 0 ? "Đây là số chẵn" : "Đây là số lẻ");
  }
};

handleUnionType("demo123"); 
handleUnionType(10);        
handleUnionType(15);        
