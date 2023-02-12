import { useRef } from "react";

const CarDetails = ({
  initialData = {   
    branch: "fiat",
    model: "panda",
    year: 2011,    
  },
}) => {
  const inputRefBrand = useRef(null);
  const inputRefModel = useRef(null);
  const inputRefYear = useRef(null);
  const handleInputs = (e) => {
    e.preventDefault();
    const newData = {};
    newData.brand = inputRefBrand.current.value;
    newData.model = inputRefModel.current.value;
    newData.year = inputRefYear.current.value;

    if (JSON.stringify(newData) !== JSON.stringify(initialData)) {
      inputRefBrand.current.value = "";
      inputRefModel.current.value = "";
      inputRefYear.current.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={handleInputs}>
        <label name="brand">Brand</label>
        <input type="text" name="color"ref={inputRefBrand}/>
        
        <label name="model">Model</label>
        <input type="text" name="model"ref={inputRefModel} />
        
        <label name="year">Year</label>
        <input type="number" name="year"ref={inputRefYear}/>  
            
        <button type="submit">Submit</button>  
      </form>
    </div>
  );
};

export default CarDetails;