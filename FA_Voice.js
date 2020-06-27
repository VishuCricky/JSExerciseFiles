function parsePropertyAddress(propertyAddress) {
  // 4131 Bloomdale Dr, Charlotte, NC 28211
  // 2760 Faust Ave, Long Beach, CA 90815
  // 4152 Silver Dollar Ave Apt 1, Las Vegas, NV 89102
  let addr = {};
  let addrParts = propertyAddress.split(',');
  if (addrParts.length != 3) {
    console.log(`3 parts expcted in address: ${propertyAddress}`, "api:parseContractIdentificationPropertyAddress");
    return null; // hard fail
  }

  addr.streetAddress = addrParts[0].trim();
  addr.city = addrParts[1].trim();
  // split state and zip
  let stateZip = addrParts[2].trim().split(' ');
  if (stateZip.length != 2) {
    console.log(`2 parts expcted in state-zip: ${stateZip}`, "api:parseContractIdentificationPropertyAddress");
    return null; // hard fail
  }
  addr.state = stateZip[0];
  addr.zip = stateZip[1];
  return addr;
}

function getAddressParts(streetAddress, city, state, zip) {
  try {
    let streetAddrParts = parseStreetAddress(streetAddress);
    return {
      streetNum: streetAddrParts.streetNum,
      streetName: streetAddrParts.streetName,
      streetTokens: getStreetTokens(streetAddrParts.streetName),
      apt: streetAddrParts.apt,
      city: city ? city : null,
      state: state ? state : null,
      zip: zip ? zip : null
    }
  }
  catch (e) {
    logUtils.errorlog(e.toString(), "addressUtils.getCleanedAddress");
    throw e;
  }
}