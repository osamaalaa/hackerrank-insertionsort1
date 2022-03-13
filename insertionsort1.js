let arr = [2 , 4 , 6,  8,  3]

let len= arr.length , beforLast = len -2  ,last = arr[len - 1]
    while(arr[beforLast] > last){
        arr[beforLast + 1] = arr[beforLast]
        console.log(arr.join(" "))
        beforLast --
    }

    arr[beforLast + 1] = last 
    console.log(arr.join(" "))
