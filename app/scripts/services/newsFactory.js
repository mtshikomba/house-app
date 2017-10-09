'use strict';

/**
 * @ngdoc service
 * @name myHouseAppApp.news
 * @description
 * # news
 * Factory in the myHouseAppApp.
 */
angular.module('myHouseAppApp')
  .factory('newsFactory', function ($firebaseArray, $firebaseObject, $routeParams) {
    // Service logic
    // ...



    // Public API here
    return {
      NEWS: [],

      ref: firebase.database().ref('news'),

      get: function () {
        this.NEWS = $firebaseArray(this.ref);
        return this.NEWS;
      }
      ,
      getItem: function (id) {
        return $firebaseArray(new firebase(this.ref + id))
      }
      ,
      delete: function (id) {
        console.log(id);
        return $firebaseObject(id).$remove();
      }
      ,
      update: function (object) {
        var news = $firebaseObject(new firebase(this.ref + $routeParams.$id));
        return news.$save(object);
      }
      ,
      add: function (object) {
        return $firebaseArray(this.ref).$add(object);
      }

    };
  });