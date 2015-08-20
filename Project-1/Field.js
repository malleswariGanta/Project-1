/* Second Push */
function clientPageInit(type) {
	
	//set default value to the custom filed
	var recId = nlapiGetRecordId();
	var recType = nlapiGetRecordType();
	var record = nlapiLoadRecord(recType,recId);
		
	var context = nlapiGetContext();
	var userName = context.getUser();        // entity id of the current user 
	var userRole = context.getRole();        // id of the current user's role 
	var userDept = context.getDepartment();  // id of the current user's department 
	var userLoc = context.getLocation();     // id of the current user's location 

	//  Display information
	alert("Current User Information" + "\n\n" +
		 "Name: " + userName + "\n" +
		 "Role: " + userRole + "\n" +
		 "Dept: " + userDept + "\n" +
		 "Loc: " + userLoc
		 );
   var data = "Name: " + userName + "\n" + "Role: " + userRole + "\n" +  "Dept: " + userDept + "\n" +  "Loc: " + userLoc;
	
	record.setFieldValue('custbody_g_field',data);
	m=nlapiDisableField('custbody_g_field',true);
	nlapiSubmitRecord(record);
}
