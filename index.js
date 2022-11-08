const request = require('request');
const schedule = require('node-schedule');

const requestBody = (startDate, submitDate) => {
    return {
        answers : [
            {
                questionId: "r1f2679c899054533ad52881e1b78a7a9",
                answer1: "111"
            },
            {
                questionId: "rc08f6450df0945a09edda5fffd0dd934",
                answer1: "222"
            }
        ],
        startDate,
        submitDate
    };
};
const options = {
    uri: "https://forms.office.com/formapi/api/9188040d-6c67-4c5b-b112-36a304b66dad/users/00000000-0000-0000-0003-bffd8053179c/forms('DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__YBTF5xUMVo1VTdRNVk4RVA4SENIQllNWEdKRTBNNi4u')/responses",
    body: requestBody(new Date(new Date().getTime() - 2000).toISOString(), new Date().toISOString()),
    json: true
};


schedule.scheduleJob('* 2 * * * *', function(){
    console.log('2Min');
    request.post(options, function (err, res, body) {
        console.log(res);
    });
});