export function lineCheck(input){
  if (!Array.isArray(input)){
    throw new Error("Not Array");
  }
  return !(input.indexOf(0) > -1);
}