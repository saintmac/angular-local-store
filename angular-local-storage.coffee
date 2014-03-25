angular.module('vyteApp').service '$localStore', ->
  class LocalStorage
    constructor: ->

    get: (key) ->
      JSON.parse(localStorage.getItem('key'))

    put: (key, value) ->
      localStorage.setItem key, JSON.stringify(value)

    remove: (key) ->
      localStorage.removeItem key


  return new LocalStorage()