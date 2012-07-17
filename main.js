function main(){
    var oauth_verifier_key_name = 'oauth_verifier';
    var qs = get_query();
    var result = get_query_value(oauth_verifier_key_name,qs);
    console.log(qs);
    console.log(result);
    var status_msg_success = 'Authorization Successfully!!';
    var status_msg_failed = 'Authorization Failed...';
    var pincode_msg_success = 'success';
    var pincode_msg_failed = 'failed';

    if (result != null){
        document.getElementById('status').innerHTML = status_msg_success;
        document.getElementById('pincode_msg').innerText = pincode_msg_success;
        document.getElementById('pincode').innerHTML = result;
    }
    else{
        document.getElementById('status').innerHTML = status_msg_failed;
        document.getElementById('pincode_msg').innerHTML = pincode_msg_failed;
        $('div.pincode_key').remove();
    }
}