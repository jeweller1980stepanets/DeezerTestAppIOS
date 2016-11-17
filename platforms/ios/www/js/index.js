/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
        var saccess = function(){};
        var error = function(){};
        var deezerCordova = window.cordova.plugins.DeezerPlugin;
        document.getElementById('init').addEventListener('click',function(){deezerCordova.init(saccess,error,"214402")});
        document.getElementById('log').addEventListener('click',function(){deezerCordova.login();});
        document.getElementById('logout').addEventListener('click',function(){deezerCordova.logout();});
        document.getElementById('playTrack').addEventListener('click',function(){deezerCordova.playTrack(saccess,error,"129938604");});
        document.getElementById('playAlbum').addEventListener('click',function(){deezerCordova.playAlbum(saccess,error,"122540");});
        document.getElementById('playList').addEventListener('click',function(){deezerCordova.playPlaylist(saccess,error,"2268421962");});
        
        document.getElementById('next').addEventListener('click',function(){deezerCordova.next()});
        document.getElementById('prev').addEventListener('click',function(){deezerCordova.prev()});
        document.getElementById('pause').addEventListener('click',function(){deezerCordova.pause()});
        document.getElementById('play').addEventListener('click',function(){deezerCordova.play()});
        
        deezerCordova.Events.on_pause = function(){document.getElementById('action').innerHTML = "player paused"};
        deezerCordova.Events.on_player_play = function(){document.getElementById('action').innerHTML = "player playing"};
        deezerCordova.Events.on_position = function(arg){document.getElementById('media_time').innerHTML = Math.floor(arg[0]);
            document.getElementById('duration').innerHTML = Math.floor(arg[1])};
        deezerCordova.Events.on_buffering = function(arg){document.getElementById('buffering_time').innerHTML = (arg[0] * 100) + " %"};
        deezerCordova.Events.on_current_track = function(arg){document.getElementById('cur_track').innerHTML = arg[1]};
        deezerCordova.Events.on_track_ended = function(){document.getElementById('action').innerHTML = "track ended"};
        
        document.getElementById('slider_seek').addEventListener('click',function(e){
                                                                var valX = (e.offsetX)*100/220;
                                                                deezer.seek(valX)});
        

    }
};

app.initialize();
