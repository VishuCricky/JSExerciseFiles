/* let testArray = [];

function addCommData(name, value) {
	testArray.push({ name, value });
}

const isEmpty = input => {
  if (input !== null && input !== undefined) {
    if (Array.isArray(input)) {
      return input.length === 0;
    } else if (typeof input === 'object') {
      return (Object.keys(input).length === 0 && input.constructor === Object) || JSON.stringify(input) === JSON.stringify({});
    } else if (typeof input === 'string') {
      return input.trim() === '';
    }
    return false;
  } else {
    return true;
  }
};

const CTI = {

	CALLDATA: {
		PROPERTY_ADDRESS: 'Property Address',
		STREET_ADDRESS: 'Street address',
		ZIP: 'Zip',
		CLAIM_OWNER_TRANSFER: 'ClaimOwnerTransfer',
		INCOMING_VDN: 'Incoming VDN',
		CONTACT_NAME: 'Contact Name',
		CONTACT_PHONE_NUMBER: 'Contact Phone Number',
		CONTACT_MOBILE_NUMBER: 'Contact Mobile Number',
		OUTGOING_VDN: 'Outgoing VDN',
		CONTRACT_NUMBER: 'Contract Number',
		WORK_ORDER_NUMBER: 'Work order number',
		SCREEN_CODE: 'ScreenCode',
		MULTIPLE_NEW_CLAIMS: 'Multiple New Claims',
		TRADE_GROUP_NAME: 'Trade Group Name',
		CLAIM_NUMBERS: 'ClaimNumbers',
		CLAIM_NUMBER: 'Claim Number',
		SESSION_ID : 'Session Id ',
		ADDRESS_LINE_1 : 'Address Line1',
		CITY : 'City',
		STATE : 'State',
		ID : 'ID',
		TYPE : 'Type',
		LEAD_TYPE : 'Lead Type'
	}
};

let isRenewalsFlow = true;
let renewalsLeadContractInfo = {
	"leadContractInfo": {
		"addressLine1": "11811 Fairway Dr",
		"city": "Little Rock",
		"fullAddress": "11811 Fairway Dr, Little Rock, AR 72212",
		"homeOwnerName": "KRISTOPHER MAGNUSON",
		"id": "10469815805",
		"leadType": {
			"nil": "true"
		},
		"state": "AR",
		"type": "Contract",
		"zipCode": "72212"
	},
	"zipCode": "72212",
	"streetAddress": "11811"
};

function fillCtiBo(isRenewalsFlow,renewalsLeadContractInfo) {

  if(isRenewalsFlow && !isEmpty(renewalsLeadContractInfo)){
    if(!isEmpty(renewalsLeadContractInfo.leadContractInfo)){
      let leadContractInfo = renewalsLeadContractInfo.leadContractInfo;
      console.log("leadContractInfo :",leadContractInfo);
      if(!isEmpty(leadContractInfo.fullAddress)){
          addCommData(CTI.CALLDATA.PROPERTY_ADDRESS, leadContractInfo.fullAddress);
      }
      if(!isEmpty(leadContractInfo.addressLine1)){
          addCommData(CTI.CALLDATA.ADDRESS_LINE_1, leadContractInfo.addressLine1);
      }
      if(!isEmpty(leadContractInfo.city)){
          addCommData(CTI.CALLDATA.CITY, leadContractInfo.city);
      }
      if(!isEmpty(leadContractInfo.state)){
          addCommData(CTI.CALLDATA.STATE, leadContractInfo.state);
      }
      if(!isEmpty(leadContractInfo.id)){
          addCommData(CTI.CALLDATA.ID, leadContractInfo.id);
      }
      if(!isEmpty(leadContractInfo.type)){
          addCommData(CTI.CALLDATA.TYPE, leadContractInfo.type);
          if(leadContractInfo.type === 'Lead'){
              if(!isEmpty(leadContractInfo.leadType)){
                addCommData(CTI.CALLDATA.LEAD_TYPE, leadContractInfo.leadType);
              }
          }
      }
    }
    if(!isEmpty(renewalsLeadContractInfo.zipCode)){
      addCommData(CTI.CALLDATA.ZIP, renewalsLeadContractInfo.zipCode);
    }
    if(!isEmpty(renewalsLeadContractInfo.streetAddress)){
      addCommData(CTI.CALLDATA.STREET_ADDRESS, renewalsLeadContractInfo.streetAddress);  
    }  
  }
}

fillCtiBo(isRenewalsFlow,renewalsLeadContractInfo);
console.log("testArray :",JSON.stringify(testArray)); */

function isError(code) {
  if ((code === 'IDENTIFICATION_ACTION_100') || (code === 'IDENTIFICATION_ACTION_108') || (code === 'IDENTIFICATION_ACTION_107')) {
    return false;
  }
  else {
    return true;
  }
}

let resp = {
  "LeadContractInfo": [
    {
      "addressLine1": "11811 Fairway Dr",
      "city": "Little Rock",
      "fullAddress": "11811 Fairway Dr, Little Rock, AR 72212",
      "homeOwnerName": "KRISTOPHER MAGNUSON",
      "id": "10469815805",
      "leadType": {
        "nil": "true"
      },
      "state": "AR",
      "type": "Contract",
      "zipCode": "72212"
    },
    {
      "addressLine1": "11811 Fairway Dr",
      "city": "Little Rock",
      "fullAddress": "11811 Fairway Dr, Little Rock, AR 72212",
      "homeOwnerName": "KRISTOPHER MAGNUSON",
      "id": "10469815805",
      "leadType": {
        "nil": "true"
      },
      "state": "AR",
      "type": "Contract",
      "zipCode": "72212"
    }
  ],
  "errorCode": "IDENTIFICATION_ACTION_100"
};

//AuthUtils
function filterDuplicateLeadContracts(leadContractInfoArray){
  let leadContracts = {};
  let filteredLeadContractsArray = [];
  for (let leadContractInfo of leadContractInfoArray) {
    try {
      if (leadContracts[leadContractInfo.id]) {
        continue;
      }
      else {
        filteredLeadContractsArray.push(leadContractInfo);
        leadContracts[leadContractInfo.id] = {};
      }
    }
    catch (e) {
      logUtils.errorlog(e.toString(), "api:contract_identification_byAddress");
      return 'err.exception';
     }
  }
  return filteredLeadContractsArray;
}


function filterLeadContractsByStreetName(leadContractInfoArray, collectedStreetName){
  let filteredLeadContractsArray = [];
  if(!collectedStreetName){
    return filteredLeadContractsArray;
  }
  for (let leadContractInfo of leadContractInfoArray) {
    try {
      let addr = getAddressFromPropertyAddress(leadContractInfo.fullAddress);
      if (AddrUtils.streetNameEquals(collectedStreetName, addr.streetName)) {
        filteredLeadContractsArray.push(leadContractInfo);
      }
    }
    catch (e) {
      logUtils.errorlog(e.toString(), "api:filterLeadContractsByCollectedStreetName");
      return 'err.exception';
     }
  }
  return filteredLeadContractsArray;
}

console.log(filterDuplicateLeadContracts(resp.LeadContractInfo));

function getNextEventForApiResp_IdentifyLeadContractInfoByAddress(resp) {
  let eventObj = {};
  try {
    let respOut = resp;
    if (isError(respOut.errorCode)) {
      eventObj.event = 'err.api';
      return eventObj;
    }
    else {
      let contractCount = respOut.LeadContractInfo.length;
      if (contractCount == 0) {
        eventObj.event = 'api.resp.contracts.notfound';
        return eventObj;
      }
      else {
        respOut.LeadContractInfo = AuthUtils.filterDuplicateLeadContracts(respOut.LeadContractInfo);
        if (respOut.LeadContractInfo.length == 1) {
          eventObj.event = 'api.resp.contracts.notfound';
          eventObj.filterDuplicateLeadContracts = respOut.LeadContractInfo;
          return eventObj;
        }


        let collectedStreetName = AuthData.getCollectedAddress().streetName;
        if (collectedStreetName) {
          respOut.LeadContractInfo = AuthUtils.filterLeadContractsByStreetName(respOut.LeadContractInfo, collectedStreetName);
          switch (respOut.LeadContractInfo.length) {
            case 0:
              return 'api.resp.contracts.addr.nomatch';
            case 1:
              AuthData.setAuthenticatedContract(respOut.LeadContractInfo[0]);
              return 'api.resp.contracts.addr.match.unique';
            default:
              // FAA-374 filter out contracts that the user cannot file a claim on
              respOut.LeadContractInfo = AuthUtils.filterContractsThatCannotFileClaims(respOut.LeadContractInfo);
              // try again
              switch (respOut.LeadContractInfo.length) {
                case 0:
                  return 'api.resp.contracts.addr.nomatch';
                case 1:
                  AuthData.setAuthenticatedContract(respOut.LeadContractInfo[0]);
                  return 'api.resp.contracts.addr.match.unique';
              }
          }
        }

        let collectedApartment = AuthData.getCollectedAddress().apartment;
        if (collectedApartment) {
          respOut.LeadContractInfo = AuthUtils.filterContractsByApartment(respOut.LeadContractInfo, collectedApartment);
          switch (respOut.LeadContractInfo.length) {
            case 0:
              return 'api.resp.contracts.addr.nomatch';
            case 1:
              AuthData.setAuthenticatedContract(respOut.LeadContractInfo[0]);
              return 'api.resp.contracts.addr.match.unique';
            default:
              return 'api.resp.contracts.addr.match.multiple';
          }
        }
        else {
          // we can collect and filter by apt as long as at least 1 addresses returned has an apartment
          respOut.LeadContractInfo = AuthUtils.filterContractsWithApartment(respOut.LeadContractInfo);
          if (respOut.LeadContractInfo.length == 0) {
            return 'api.resp.contracts.addr.nomatch';
          }
          else {
            AuthData.setFilteredContracts(respOut.LeadContractInfo);
            return 'api.resp.contracts.addr.match.incomplete.apartment';
          }
        }
      }
    }
  }
  catch (e) {
    logUtils.errorlog(e.toString(), "api:contract_identification_byAddress");
    return 'err.exception';
  }
}