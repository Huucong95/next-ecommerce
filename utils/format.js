export const formatMoney = (num) => {
  if(num>0){
    return num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  };
  