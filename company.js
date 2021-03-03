alert("hi")

// Question 1

arr=['web-1305','site-1305','web-1304','site-1304']
resultarr=['site-1304','web-1304','site-1305','web-1305']
function tosort(arr){
    
    for(var i=0; i<arr.length-1 ;i++)
    { 
        var a=arr[i].split("-") 
        for(var j=i+1;j<arr.length;j++)
        {   
            var b=arr[j].split("-")
            if(parseInt(b[1])>=parseInt(a[1]))
            {
                if(b[0].length>=a[0].length)
                {   var temp=arr[i]
                    arr[i]==arr[j]
                    arr[j]==temp
                }
            }
        }
    }
    var newarr=arr.reverse()
    return newarr  
}
console.log(tosort(arr))




// ANother Method
    var r= arr.sort()
    r.sort(function(a,b)
    {
        a=a.split("-").reverse().join("");
        b=b.split("-").reverse().join("");
        return a>b?1:a<b?-1:0;

    })


    

    // Question 2 

arr1=["NORTH" , "SOUTH" ,"EAST", "WEST" ,"WEST"]

function direction(arr){
    let emptyArr=[]
    let northCount=arr.filter(item=>item=="NORTH").length
    let southCount=arr.filter(item=>item=="SOUTH").length
    let eastCount=arr.filter(item=>item=="EAST").length
    let westCount=arr.filter(item=>item=="WEST").length
    if(northCount>southCount){
        emptyArr=Array(northCount-southCount).fill('NORTH')
    }
    else if(southCount>northCount){
        emptyArr=Array(southCount-northCount).fill('SOUTH')
 
    }
    if(eastCount>westCount){
        emptyArr=[...emptyArr,...Array(eastCount-westCount).fill('EAST')]
    }
    else if(westCount>eastCount){
        emptyArr=[...emptyArr,...Array(westCount-eastCount).fill('WEST')]
 
    }
    return emptyArr
}
 
console.log(direction(arr1))