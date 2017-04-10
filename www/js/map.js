// .controller('MapCtrl', function($scope, $state, $cordovaGeolocation, $http) {

//     var places = [];
//     function LoadMap() {
//         var mapOptions = {
//             center: new google.maps.LatLng(30.716823, 76.695708),
//             zoom: 10,

//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

//         //Create and open InfoWindow.
//         var image = {
//             url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAPKElEQVR4Xu2YCXBd1XnHf3d79+2LlicJyZYs2cKyZeNAYgLGYAOBSUtoWAqdNCSZOGVLiKEh7ZCmrZkJQ9phQmgyDNCFSUpoWGJSislCCTYOMGBCYmMMtmXQLmt5kt7+7t45971HnZIGwtjMeKw7c+fqXd177vf9zv9bzpE4wQ/pBPefBQALCjjBCSyEwAkugIUkuBACCyFwghNYCIETXAALVWAhBBZC4AQnsBACR00A/+DF8EihEMcjAUSQCQMhXDQkFP8ECw8LnDKOV8K2i7hOFtmYx3bm2JIuHDWb3sNA718BW7wkGh9CoR+PXqAdSIMPIYpEEAgAOh4yru88KP4vG9kHYeBQ9iGYVgbbmMQ2RjDNg1jWfuzKa9y98vB78ON9P/IHA+j8Z2/TigZu7Gmh3yx5WEaZvK2RtxXmLJmMCZNZKFRAikNIh5AHMRkaJJOkk8fOjmLMjqGWZomGVeJhnWgoSGtTnMZkjEQsQiQUQtODbHpo4qbc7f3fft8evsuL7xnADU968Z40T3Y2sk4Dtj30AE32+LRuzk5JyOV8sWTPZWZlw3X1k668Y+Uvss2y9NNbvfzQHqU4M4w5O4pdzGXLRWPadJhTwU4ktEq6tc1dsmSJ1LeiT122rC/Y07Mk3N6+KBxPJFKNjdH49iFZ2fjtA5/gnjOfOBYQ3hOAW573lq9t5KXWBmJz82X+5uavVv560yXldauXDs9l5+1cLm/PZ7PW+PhoSbZNwhtuOO/x/RVl9192M354CtPyMGwXSZEe8xxvzoV9qqpKuq5r4XBYSTY06Is7OsJdXV2xZct6U93dSxoXd3amVFnpPKV3UeCxA2bkinsPnc2/bNh5tCG8K4B/3OWtW9PM9oYw6njO5rrrb+TacxbNf/qqz+jDbx1UQqGQ7DiOWi6XmZ6eJhaNYDYuZ4fVw/T91zJ8YC8zs1nm5+fxPOe+fD7fYprmK67rlmzb1mVZ9iFEIhE1nU4Huru7I729vfHe3t5ES2trRyqZavtof49+2465+JZHh5bzwMf3H00IvxvAlukNSMHz0QPLfnBx4IolCdg3C1/4yjc4bfY/+eQll9K9rB+NMh0dncRiETRNw3EcAqEQY3MGzzjLSex9hMyBlxgZn2J8fJzDhw+TyWTsSqUybBjGgGmae3HdjCsqg+sSDgdCqURCW9TeHljW2xM7ZdWqaDLZcNqaNWukD63o7LhmayZ231MTXTz4x0NHC8LbAG79RfbCF6fVL57cFDyvJSqHIwEoWhDXoTsBQ0W47W9vZebxLXzqs5uIRkPEwxH6Vqykt28FyWQTqiYRDkeplArsdhbTUBklN7CLwdFxhoeHGBkcZGjoLQ6PjTM9M0WhZIt6mAPGQBok3DCoJZqtWKo5nmppD7V3dIZbWtuaG5KxztNWL883RkO9mx8bnx+dmPsIj1w1cDQg+ACu+i9jW2si8EcVG6aKMFGE2RIYLmgydMbgwm5IxmHHs79hMZMMH9hNUHZZ3J7mjL6lNEUjFCWJpf1rkIwcejSJYbpYmSHemppncq7A4dk8Y7MG00WLWUMhJ0WR9SizXowsESbLGhlTBcMBywLXAMsEuwyVMrglUAywxVk6iGW+QLTlZULhfSjyAdIvjLFli/uHgJH4RmkRAXVYlSVsG6iIWi2Jeg3+UB44HsEQXNwrs6pNQZIhrFfhqOK54QNEsgcIdfRjOh5K4yJSAZvnRhxGsg5TJZityORNMD3JX4JKkofruriWRUTzaAk5NARBl1wM22G6YDIyW2F0tkSpaIDjguyAZ4NjVSFYAkweXMtvMAhoFZTwJGrgTRRtF7L8S8rSL3nworn/D4rE1/L9hJVXkTwwPC7+SISb18I3X4Cn3ihjOR7+/xzhrE1/k4CjktAgoUMi4JGMBAipErKZI6g4JKIxFMdAkiWKtkzZdpkqOIxlbQbnDAZmLEpZG2wXFA9knwjILroKjRGZtqjMSTGFpA75ssWB6SJvjOZ9YD4I10bkDf/q1GEUqmDEISugaaBFQIv+hkDwe+Qrd/PIFeaRMKT7Xil+fPMPh58syzG0xjSfdx+ht/AS0y1n8Wzz5Tz/WhY0T1iIjonhSuDU5eEhyS5B1SOiQCQgkQhCLADpoENTWCEZVvxrOiyTDMtENBnbcTk0a7N/ymT3RIV9k2Uy82JWBRCJqhQd/5ua7tEalemIq8iywxvjeTK5Cnh1COIqlCFgONVwMcvgVKrjiOcEXC0MoWSBQOTrfP/yu+oQpMLIvn+/+f6df37PwT6puyeCec8F9K/5MPmJN1l16Vf4Qeoa8tMZ37CIbGB6MpawTcSH59U+7Pph4s+Ib4gHqpiZao4VExEPSDRGFdqjCiclVFa06PQ2aSRDmq+AoRmDnYNFnnxtnra4wsicxVzBqI5n15yUPT9cyoYoGnXHj7zWv1+7J+yoyqFqr+whKQoEU696DYEzuOPCom9h0+fu3zAT7H+mI5yhY/tXaVnUQ1O6iahXZG/PX/D0RCsEXKIalKUgjqSA50dyNUcIIwVp/yoAuMQUm4Ij4QkjBCi7BkjEsib5r+qaxOKkTk86wOq2EGvawiRCCuu6I9y0dYj7fzYK4ZraxHtiHKEQ8c26U+JvyRXRgyLbKJ5NQLJRbYOAV0azcihGlqCVRSrOELDmqBSyNLb37Hr+x/+29n/7gGufvTuqS9d9dOAOlrU388k/vZLxoUPs3LWHrfHPMp/JEw05lG0ZRzilyCDLIGkggIiYq1+BqOJSEEr2wQjnHSLBAOuWp0mFZOZLDnuHMoyN56ocxanKdDUEOLs3yQUrG3hjIs93dswQ1FVaIi5OMUslO4Ni5dCtHKolFpEFYpQpZDO4RgG3XPDl75pl7EoJzzawbAvTNPE8CdtXrURjcwtXX3d94rcboRt+ddsph75783UXLA9cs/mvyOXzPHDPXdw32MxudxVROU9FhJk/G9WZrs6672nVUUlGkmWCqkbZq0ERYCSNC/uCdI0+AcVZ7GQ3St/H2Pp6iZnJHKhS9X3LBdNBj6t8buMyUhPP8ezD9yB7FsVshlKh4D/nOg6eqiBJih9xrrgn8qn4vhrAdUV+kpBE/KPgiInwc62EKss0NqezL77wfPIdneA556z/1mWXXnbTDV/e7L8wdGiATV+8ke2dN/irWNt0REt7hPTrEOqhUJWqKrnYTg2MDdHGFCsO/iutgRLT2QqVwjyt6SaSF/09/7FXqMSsJqu6RZaLFA6z9vU7mDz4ayQ9jCyraIEAqqrWHKs6JA7Rhba2nsTyFcuZmjjMwMBBvzuVxZCSKBa2L1hF8sgXi6zpX/3j7z30o0veAeD8czd8aUX/6u/cdVc1Uf7kJz/jztv/jpfK7cTO3YxnlpnMlrDLJggHHVNgr4akUENdCW8nSX96iAddVr75IOnWNM3pZizL5rVXf01TupV9nZ9ieHQOAiLeRWgJNUiEojFOnfgh5cm3kDTdZyPLCsGAVmXlP1ftVVRcbNfGFZVEmBNM4Coalqf6OaskJk4NkyOCoQSLK3rbWrffvaXwDgCtra1d69evf+vqq6+ms7OTp556iocffpjdL+2g6eQzSJ/yMUJNi1BCCRxPwpACDEzkODxXBNOoliLRNwgrhD9+zHnoiscZ+Z+zfGkXF138J/664PHHH2fwwF681lPY37ARs5itZe1a9vYUruy1sAZ2MJktoieaUdQgZUfxewvDsn1WlitRUaIYYu9F0bH0GMbgK7iFKYxCFlv0Du2nQnolhBrBrPwZT3/9IT8kal+spyGxg+OceeaZv1q7du2qlpYWfxGzc+dODh48SLFYrD4uhaGp44lIY1t4WU/v4lR7Z7MWbYx5WkzOiXY6Z5DJFsmJXRGjUoWiaHyYl7nm0g184brNzM7Ocu+997J1648YffMA0umfZ8JuAFf0KTUAls3K5UvALDKZmcHb/9845QK5QgnXqvj3UcLQsQZaVos6X/VINEdP314NK3GvcSksOQPCLUI2z/HTr531dh9QqyfC8WRtSyum6/qp55577j/pui5Wb4yMjDA6OortNyj+IbapttUACvGLPjSkJJpTzW2LGxrau5oa2jrjwdRJcU9PSCXLolD2SM68yKfPW8XV13/ZH0RA3bRpE6/v3UPJkZHOuqEGua4AsYNogRQAyYGXv19VVyAEig7BMMQXQ0OX3536lSgQg8oclLIQToEa8idAqmTxXPMZzIlPsOfntZk8ogD5m5f4m5kp4Vgqlbry5JNPvkWs44UKcjmxaPNXCuPA7nrhOqIg1wt0Tf8imKUwjZ2N0aaORLqjJ5oKmLHzV7Rq37zjWz6Abdu2ceedd7Jnzx5/LyGydB2lzrPxyvVQqMZ3tYwCdvGIUiuGF12p2F+t5aJQCiSxmJpHmn0d2Sgj2SUCVgHFLrn5YklsZv3WYunIHFAPAzGjas3Zxtpmp7BE7Nbma/qMAzF/57d6FeDq98TvaO232BgVYIXCFE0LtF9++WWnbt68mXQ67QN49NFHfQBzc9X1itqzDim1GMc0UF0Lzy7jlvNIruXHu4KD4hmono0uGh5/fxXKejOyGvTXApJTQinPIHliF0pDUzWKFWPn1NT0ZwARY/PiFeHLu+4I1TX/e65iDB38XeA6EAFBhJSAIuCIU9wLrl+//kunn356TOQXEVbbt29nYGDg7fwi5jQZj2XDkXBQrBbDQT2wZMkSVVUVv/xVy2AAWZGRJQXbcShXKpSLBQr5LPl8kUK55BimXTAMM2NZ1ohpWocsy9wFzAATNRVPCQhHA8DvYyQkJ+AIFQgYajQaPX/jxo3fFc6IWR8cHPy/+WUMOFSDKepIqK+vr7mrqzsmSciu60iGYXiFQoF8Pm/l8/lKsVgsliuVvGlZs57jCMdGa6dwVuQrIS+h3vopZl80M2Jp94EdIqwahOxaWlpuWrp06S2iEoyNjdXzizBEGPhMLYREGPndRU22QroieYlkJGYyU3NOODx5xD0xhtggeE/HBwlAOFPPCWIGuhVF6XEcR9wXBgvH/ExbS7D17RmReEu1nCT+rva0R+n4IAEIk4Wk65sJb9fUo+TL+xrmgwbwvow8li8tADiWdI+HsRcUcDzM0rG0cUEBx5Lu8TD2ggKOh1k6ljYuKOBY0j0exl5QwPEwS8fSxgUFHEu6x8PYCwo4HmbpWNp4wivgfwBX5cVh/1wyOwAAAABJRU5ErkJggg==', // image is 512 x 512
//             scaledSize: new google.maps.Size(30, 35)
//         };
//         var infoWindow = new google.maps.InfoWindow();


//         setInterval(function() {
//         $.ajax({
//             url: 'http://postjob.xyz/restomulti/driver/api/GetAllDrivers',
//             type: 'GET',
//             dataType: 'jsonp',
//             success: function(data) {
//               places = [];

           
//               $.each(data.details, function(key, details) {
//                 places.push({
//                   'Id': details.driver_id,
//                   'lat': details.location_lat,
//                   'lng': details.location_lng,
//                 });
//               });
//                console.log(places);
             
//                 for (var i = 0; i < places.length; i++) {
//                   var data = places[i];
//                   var myLatlng = new google.maps.LatLng(data.lat, data.lng);
//                   var marker = new google.maps.Marker({
//                     position: myLatlng,
//                     map: map,
//                     icon: image,
//                     title: data.Id
//                   });
//                   // marker.setMap(null);
//                   // marker.setPosition(myLatlng);

                 

//                   (function(marker, data) {
//                     google.maps.event.addListener(marker, "click", function(e) {
//                       infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.Id + "</div>");
//                       infoWindow.open(map, marker);
//                     });
//                   })(marker, data);

//                 }
//               },
//             error: function() {

//             },
//           });
//       }, 2000);
//       }
//       $(document).ready(function() {
//         LoadMap();
//     });
//   }); 