const ftoc = function(fTemp) {
    let cTemp = (fTemp -32)*(5/9);
    cTemp = Math.round(10*cTemp)/10;
    
    return cTemp;

}

const ctof = function(cTemp) {
  let fTemp = cTemp * (9/5) + 32;
  fTemp = Math.round(10*fTemp)/10;
  return fTemp;

}

module.exports = {
  ftoc,
  ctof
}
