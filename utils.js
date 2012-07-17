function get_query(){
    var QS = new Array;
    if (location.search.length > 1){
        var m_Array = location.search.substr(1).split("&");
        for(idx in m_Array)
        {
            QS.push(m_Array[idx].split("="));
        }
    }
    return QS;
}

function get_query_value(key, query_obj){
    for (idx in query_obj){
        if (query_obj[idx][0] == key){
            return query_obj[idx][1];
        }
    }
    return null;
}
