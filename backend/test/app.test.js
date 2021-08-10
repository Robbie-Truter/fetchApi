let expect = require ( 'chai' ).expect;
let request = require ( 'request' );


//unit testing backend with mocha chai
//checking if port 8000 is up and working and sending correct string
describe( 'Status and content' , function () {
    describe ( 'Users page' , function () {
        it( 'status' , function (done){
            request( 'http://localhost:8000/' ,
                function (error, response, body) {
                //expect status code to equal 200
                    expect(response.statusCode).to.equal( 200 );
                    done();
                });
        });
        it( 'content' , function (done) {
            request( 'http://localhost:8000/' ,
                function (error, response, body) {
                //expect to send this string
                    expect(body).to.equal( 'Hello World!,port 8000 working successfully' );
                    done();
                });
        });
    });
});