import {GIT_HUB_APPID} from "./keys.js"

(function () {

    "use strict";

    const baseURL = "https://api.github.com/users/";

    const setting = {
        headers: {
            "Authorization": 'token ' + GIT_HUB_APPID
        }
    }

    const getUsersDateOfLastCommit = (username) => {

        return fetch(baseURL + username + "/events/public", setting)
            .then(res => res.json())
            .then(res => {
                return res.filter((item) => item.type === "PushEvent")[0].created_at;
            })

    };

    console.log(getUsersDateOfLastCommit("unfaiyted"))

    getUsersDateOfLastCommit("unfaiyted");
    //     .then(res => console.log('res:', res))


    // Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
    //
    //
    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
    // 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

    const wait = (time) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(time);
            }, time)
        })
    };

    wait (1000).then((res) => {
        const time = res / 1000
        console.log(`You'll see this after ${time} second`);
    });



}());