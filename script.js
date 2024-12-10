(function(){
    var script = {
 "class": "Player",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65"
 ],
 "start": "this.playAudioList([this.audio_ADE0EAD2_B145_81BA_41E4_77E66BC3BB6B]); this.init(); this.syncPlaylists([this.ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65_playlist,this.mainPlayList])",
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_camera"
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "label": "Sunroom",
 "id": "panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_AAA26EAD_B14C_81EF_41CB_59B052926198",
  "this.overlay_ACE757CA_B14D_8F95_41E1_8B08803A1CE7",
  "this.overlay_AA5E6E9E_B14C_81AD_41B3_CF4EB505AC7C",
  "this.overlay_AABE1D5D_B14F_80AF_41C1_DBBAF6219181"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -10.78,
   "yaw": 78.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8E77295_B144_81BF_41CE_CB40BC313E76",
   "distance": 1
  },
  {
   "backwardYaw": -78.38,
   "yaw": 114.33,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D",
   "distance": 1
  },
  {
   "backwardYaw": -62.32,
   "yaw": 57.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": -65.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_AC47A6A3_B144_819B_41B3_010199FBCEC8"
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "label": "Bedroom",
 "id": "panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_ADAC3155_B15D_80BF_41E4_B6C56451962A"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 114.33,
   "yaw": -78.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "data": {
  "label": "The Last Time I Saw Paris"
 },
 "id": "audio_ADE0EAD2_B145_81BA_41E4_77E66BC3BB6B",
 "audio": {
  "mp3Url": "media/audio_ADE0EAD2_B145_81BA_41E4_77E66BC3BB6B.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_ADE0EAD2_B145_81BA_41E4_77E66BC3BB6B.ogg"
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_camera"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Design mobile salotto",
 "id": "album_AD251327_B14C_809B_41D5_679ADFCC3A8E_0",
 "width": 1024,
 "thumbnailUrl": "media/album_AD251327_B14C_809B_41D5_679ADFCC3A8E_0_t.png",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AD251327_B14C_809B_41D5_679ADFCC3A8E_0.png"
   }
  ]
 },
 "height": 441
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_camera"
},
{
 "items": [
  {
   "media": "this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_camera"
  },
  {
   "media": "this.panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_camera"
  },
  {
   "media": "this.panorama_A8E77295_B144_81BF_41CE_CB40BC313E76",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_camera"
  },
  {
   "media": "this.panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65_playlist, 4, 0)",
   "media": "this.album_AD251327_B14C_809B_41D5_679ADFCC3A8E",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65_playlist",
 "class": "PlayList"
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_AC1AA66A_B144_816A_41E0_7235728BCB36"
 ],
 "id": "playList_ABF67819_B144_80B7_41E3_5611BEB52F14",
 "change": "this.showComponentsWhileMouseOver(this.container_AC1AC66A_B144_816A_41B5_4C2F56257D15, [this.htmltext_AC1CC670_B144_8175_41DE_A2D3CC173AF7,this.component_AC00D670_B144_8176_41D6_7BB04837F05D,this.component_AC00C670_B144_8176_41C6_44477F3BC072], 2000)"
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer"
},
{
 "items": [
  {
   "media": "this.album_AD167D59_B144_80B7_41C8_08E2B14C96F2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_AC01C670_B144_8176_41D6_0CB24F7CB0E6",
 "class": "PlayList"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Capture d'\u00e9cran 2024-12-10 154757",
 "id": "album_AD167D59_B144_80B7_41C8_08E2B14C96F2_0",
 "width": 1495,
 "thumbnailUrl": "media/album_AD167D59_B144_80B7_41C8_08E2B14C96F2_0_t.png",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AD167D59_B144_80B7_41C8_08E2B14C96F2_0.png"
   }
  ]
 },
 "height": 1063
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album Capture d'\u00e9cran 2024-12-10 154757",
 "id": "album_AD167D59_B144_80B7_41C8_08E2B14C96F2",
 "thumbnailUrl": "media/album_AD167D59_B144_80B7_41C8_08E2B14C96F2_t.png",
 "playList": "this.album_AD167D59_B144_80B7_41C8_08E2B14C96F2_AlbumPlayList"
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "label": "Squre du Vert Gallant",
 "id": "panorama_A8E77295_B144_81BF_41CE_CB40BC313E76",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_AD53FF8E_B15C_9FAD_41DD_1E15F5FE5BAF"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 78.62,
   "yaw": -10.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "120%",
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": 117.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_AC29D693_B144_81BB_41CE_557C3E86090B"
},
{
 "items": [
  {
   "media": "this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_camera"
  },
  {
   "media": "this.panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_camera"
  },
  {
   "media": "this.panorama_A8E77295_B144_81BF_41CE_CB40BC313E76",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_camera"
  },
  {
   "media": "this.panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_camera"
  },
  {
   "media": "this.album_AD251327_B14C_809B_41D5_679ADFCC3A8E",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": 101.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_AC3BC68C_B144_81AD_41E3_80AEF3A19139"
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album Design mobile salotto",
 "id": "album_AD251327_B14C_809B_41D5_679ADFCC3A8E",
 "thumbnailUrl": "media/album_AD251327_B14C_809B_41D5_679ADFCC3A8E_t.png",
 "playList": "this.album_AD251327_B14C_809B_41D5_679ADFCC3A8E_AlbumPlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": -122.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_AC7626AA_B144_8195_41A8_6C35345E102B"
},
{
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "id": "window_AAFB3C73_B14D_817B_41E1_95DC93A34526",
 "titleTextDecoration": "none",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "closeButtonPressedIconLineWidth": 3,
 "headerBackgroundOpacity": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "paddingLeft": 0,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "shadowSpread": 1,
 "closeButtonIconWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "title": "Sofa Design",
 "closeButtonPressedBackgroundColor": [],
 "headerBorderColor": "#000000",
 "backgroundColor": [],
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "borderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonBorderRadius": 11,
 "veilColorDirection": "horizontal",
 "closeButtonIconLineWidth": 2,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonRollOverBackgroundColor": [],
 "titleFontSize": "1.29vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconHeight": 20,
 "titleFontStyle": "normal",
 "bodyBackgroundOpacity": 0,
 "footerBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "titlePaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingRight": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingBottom": 5,
 "class": "Window",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titleFontColor": "#000000",
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "children": [
  "this.container_AC1AC66A_B144_816A_41B5_4C2F56257D15"
 ],
 "shadowColor": "#000000",
 "titlePaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [],
 "layout": "vertical",
 "scrollBarMargin": 2,
 "footerBackgroundOpacity": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titleFontFamily": "Arial",
 "shadow": true,
 "paddingTop": 0,
 "minWidth": 20,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconColor": "#B2B2B2",
 "headerPaddingRight": 0,
 "headerPaddingLeft": 10,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "footerHeight": 5,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyPaddingTop": 0,
 "horizontalAlign": "center",
 "bodyPaddingBottom": 0,
 "headerPaddingTop": 10,
 "data": {
  "name": "Window20571"
 },
 "bodyPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "titlePaddingBottom": 5,
 "gap": 10,
 "borderRadius": 5,
 "closeButtonBackgroundColor": []
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "label": "Bathroom",
 "id": "panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_AAC8D1D6_B143_83BD_41E4_5A53142EAF95",
  "this.overlay_AD28C3E5_B15C_879F_41C3_2D6D3DE99A91"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 57.67,
   "yaw": -62.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "120%",
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": 169.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_AC321685_B144_819F_41A1_E7878B8DF825"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "yaw": -101.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_AC59969B_B144_81AB_41D2_8C7E60E0152A"
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "id": "MainViewer",
 "transitionMode": "blending",
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarBorderRadius": 0,
 "progressRight": 0,
 "playbackBarBottom": 5,
 "toolTipBorderSize": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipFontStyle": "normal",
 "toolTipShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "paddingLeft": 0,
 "progressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipPaddingTop": 4,
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "height": "100%",
 "playbackBarHeadShadow": true,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBottom": 0,
 "playbackBarOpacity": 1,
 "paddingRight": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressHeight": 10,
 "toolTipShadowSpread": 0,
 "toolTipFontColor": "#606060",
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipDisplayTime": 600,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeight": 10,
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundOpacity": 1,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingRight": 6,
 "toolTipFontFamily": "Arial",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "gap": 13,
 "borderRadius": 5,
 "paddingBottom": 10,
 "id": "ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65",
 "left": "0.83%",
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemLabelFontColor": "#FFFFFF",
 "width": "34.97%",
 "verticalAlign": "top",
 "itemBackgroundColorRatios": [],
 "scrollBarWidth": 10,
 "itemThumbnailOpacity": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "itemLabelGap": 8,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemPaddingRight": 3,
 "itemThumbnailShadowColor": "#000000",
 "paddingLeft": 20,
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailShadow": true,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadowOpacity": 0.27,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "itemThumbnailWidth": 75,
 "itemMode": "normal",
 "itemOpacity": 1,
 "itemLabelFontWeight": "normal",
 "itemThumbnailShadowBlurRadius": 8,
 "paddingRight": 20,
 "itemThumbnailBorderRadius": 5,
 "playList": "this.ThumbnailList_ADA21431_B15C_80F7_41C3_B8BC7D07EF65_playlist",
 "itemThumbnailShadowHorizontalLength": 3,
 "class": "ThumbnailList",
 "selectedItemLabelFontWeight": "bold",
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0.33,
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 75,
 "itemLabelFontSize": 14,
 "itemLabelFontFamily": "Arial",
 "layout": "horizontal",
 "itemBackgroundOpacity": 0,
 "rollOverItemBackgroundOpacity": 0,
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "bottom": "1.78%",
 "itemBorderRadius": 0,
 "itemLabelFontStyle": "normal",
 "shadow": false,
 "itemLabelPosition": "bottom",
 "paddingTop": 10,
 "minWidth": 20,
 "scrollBarColor": "#FFFFFF",
 "itemLabelHorizontalAlign": "center",
 "itemPaddingLeft": 3,
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailShadowVerticalLength": 3,
 "itemVerticalAlign": "middle",
 "data": {
  "name": "ThumbnailList35762"
 },
 "horizontalAlign": "left",
 "itemThumbnailShadowSpread": 1
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 57.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.71,
   "hfov": 10.26
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F, this.camera_AC29D693_B144_81BB_41CE_557C3E86090B); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_ABF74818_B144_80B5_41C2_DD4EC9475ED3",
   "yaw": 57.67,
   "pitch": -16.71,
   "distance": 100,
   "hfov": 10.26
  }
 ],
 "id": "overlay_AAA26EAD_B14C_81EF_41CB_59B052926198",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 78.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.25,
   "hfov": 10.05
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8E77295_B144_81BF_41CE_CB40BC313E76, this.camera_AC321685_B144_819F_41A1_E7878B8DF825); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_ABF68818_B144_80B5_41D5_02E63964DBD3",
   "yaw": 78.62,
   "pitch": -20.25,
   "distance": 100,
   "hfov": 10.05
  }
 ],
 "id": "overlay_ACE757CA_B14D_8F95_41E1_8B08803A1CE7",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 114.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.63,
   "hfov": 9.49
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D, this.camera_AC3BC68C_B144_81AD_41E3_80AEF3A19139); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_ABF6A818_B144_80B5_41CC_AC320D1B1A14",
   "yaw": 114.33,
   "pitch": -27.63,
   "distance": 100,
   "hfov": 9.49
  }
 ],
 "id": "overlay_AA5E6E9E_B14C_81AD_41B3_CF4EB505AC7C",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 21.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_1_HS_3_1_0_map.gif",
      "width": 176,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ]
   },
   "pitch": -4.22,
   "hfov": 30.38
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_AAFB3C73_B14D_817B_41E1_95DC93A34526, this.album_AD251327_B14C_809B_41D5_679ADFCC3A8E, this.playList_ABF67819_B144_80B7_41E3_5611BEB52F14, '90%', '90%', false, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AABE1D5D_B14F_80AF_41C1_DBBAF6219181",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -78.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.97,
   "hfov": 10.64
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63, this.camera_AC47A6A3_B144_819B_41B3_010199FBCEC8); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AE1B6CD7_B15F_81BB_41E4_C44CA80C271D",
   "yaw": -78.38,
   "pitch": -19.97,
   "distance": 100,
   "hfov": 10.64
  }
 ],
 "id": "overlay_ADAC3155_B15D_80BF_41E4_B6C56451962A",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "media": "this.album_AD251327_B14C_809B_41D5_679ADFCC3A8E",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_AD251327_B14C_809B_41D5_679ADFCC3A8E_AlbumPlayList, this.htmltext_AC1CC670_B144_8175_41DE_A2D3CC173AF7, this.albumitem_AC1AA66A_B144_816A_41E0_7235728BCB36); this.loopAlbum(this.playList_ABF67819_B144_80B7_41E3_5611BEB52F14, 0)",
 "player": "this.viewer_uidAC19466A_B144_816A_41D9_EEEC71829CBBPhotoAlbumPlayer",
 "id": "albumitem_AC1AA66A_B144_816A_41E0_7235728BCB36"
},
{
 "items": [
  {
   "media": "this.album_AD167D59_B144_80B7_41C8_08E2B14C96F2_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_AD167D59_B144_80B7_41C8_08E2B14C96F2_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -10.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.57,
   "hfov": 9.79
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63, this.camera_AC59969B_B144_81AB_41D2_8C7E60E0152A); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AE1BACD7_B15F_81BB_41E6_05D65F555A63",
   "yaw": -10.78,
   "pitch": -9.57,
   "distance": 100,
   "hfov": 9.79
  }
 ],
 "id": "overlay_AD53FF8E_B15C_9FAD_41DD_1E15F5FE5BAF",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "items": [
  {
   "media": "this.album_AD251327_B14C_809B_41D5_679ADFCC3A8E_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_AD251327_B14C_809B_41D5_679ADFCC3A8E_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "class": "Container",
 "paddingBottom": 0,
 "id": "container_AC1AC66A_B144_816A_41B5_4C2F56257D15",
 "gap": 10,
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uidAC19466A_B144_816A_41D9_EEEC71829CBB",
  {
   "class": "Container",
   "paddingBottom": 0,
   "left": 0,
   "backgroundOpacity": 0.3,
   "children": [
    "this.htmltext_AC1CC670_B144_8175_41DE_A2D3CC173AF7"
   ],
   "right": 0,
   "borderRadius": 0,
   "verticalAlign": "bottom",
   "layout": "vertical",
   "scrollBarWidth": 7,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "scrollBarMargin": 2,
   "gap": 10,
   "minHeight": 20,
   "paddingLeft": 0,
   "contentOpaque": true,
   "bottom": 0,
   "backgroundColor": [],
   "scrollBarVisible": "rollOver",
   "shadow": false,
   "borderSize": 0,
   "paddingTop": 0,
   "minWidth": 20,
   "backgroundColorDirection": "vertical",
   "scrollBarColor": "#FFFFFF",
   "overflow": "scroll",
   "scrollBarOpacity": 0.5,
   "data": {
    "name": "Container25330"
   },
   "horizontalAlign": "left",
   "height": "30%",
   "paddingRight": 0
  },
  "this.component_AC00D670_B144_8176_41D6_7BB04837F05D",
  "this.component_AC00C670_B144_8176_41C6_44477F3BC072"
 ],
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "paddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container25329"
 },
 "horizontalAlign": "left",
 "height": "100%",
 "paddingRight": 0,
 "borderRadius": 0
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -117.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_1_HS_0_1_0_map.gif",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 6.99,
   "hfov": 64.3
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_AC01C670_B144_8176_41D6_0CB24F7CB0E6, 0, this.panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AAC8D1D6_B143_83BD_41E4_5A53142EAF95",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -62.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.74,
   "hfov": 14.36
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63, this.camera_AC7626AA_B144_8195_41A8_6C35345E102B); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AE186CD7_B15F_81BB_41BF_D3A6C65223C8",
   "yaw": -62.32,
   "pitch": -27.74,
   "distance": 100,
   "hfov": 14.36
  }
 ],
 "id": "overlay_AD28C3E5_B15C_879F_41C3_2D6D3DE99A91",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "levels": [
  {
   "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_ABF74818_B144_80B5_41C2_DD4EC9475ED3",
 "frameCount": 9,
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_ABF68818_B144_80B5_41D5_02E63964DBD3",
 "frameCount": 9,
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_A8E4BB4F_B144_80AA_41DD_D39C0417AE63_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_ABF6A818_B144_80B5_41CC_AC320D1B1A14",
 "frameCount": 9,
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_A8F3AE94_B144_81BD_41CA_7D31EDD9FA5D_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_AE1B6CD7_B15F_81BB_41E4_C44CA80C271D",
 "frameCount": 9,
 "colCount": 3
},
{
 "viewerArea": "this.viewer_uidAC19466A_B144_816A_41D9_EEEC71829CBB",
 "id": "viewer_uidAC19466A_B144_816A_41D9_EEEC71829CBBPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "levels": [
  {
   "url": "media/panorama_A8E77295_B144_81BF_41CE_CB40BC313E76_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_AE1BACD7_B15F_81BB_41E6_05D65F555A63",
 "frameCount": 9,
 "colCount": 3
},
{
 "borderRadius": 0,
 "paddingBottom": 0,
 "id": "viewer_uidAC19466A_B144_816A_41D9_EEEC71829CBB",
 "transitionMode": "blending",
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarBorderRadius": 0,
 "progressRight": 0,
 "playbackBarBottom": 0,
 "toolTipBorderSize": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipFontStyle": "normal",
 "toolTipShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "paddingLeft": 0,
 "progressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipPaddingTop": 4,
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "height": "100%",
 "playbackBarHeadShadow": true,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBottom": 2,
 "playbackBarOpacity": 1,
 "paddingRight": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressHeight": 10,
 "toolTipShadowSpread": 0,
 "toolTipFontColor": "#606060",
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipDisplayTime": 600,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeight": 10,
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundOpacity": 1,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingRight": 6,
 "toolTipFontFamily": "Arial",
 "data": {
  "name": "ViewerArea25328"
 }
},
{
 "class": "HTMLText",
 "paddingBottom": 5,
 "id": "htmltext_AC1CC670_B144_8175_41DE_A2D3CC173AF7",
 "backgroundOpacity": 0.7,
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarMargin": 2,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "borderSize": 0,
 "paddingTop": 5,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "html": "",
 "data": {
  "name": "HTMLText25331"
 },
 "visible": false,
 "paddingRight": 10,
 "borderRadius": 0
},
{
 "class": "IconButton",
 "paddingBottom": 0,
 "id": "component_AC00D670_B144_8176_41D6_7BB04837F05D",
 "left": 10,
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minHeight": 0,
 "paddingLeft": 0,
 "top": "45%",
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_AD251327_B14C_809B_41D5_679ADFCC3A8E_AlbumPlayList, -1)",
 "data": {
  "name": "IconButton25332"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/album_left.png",
 "visible": false,
 "paddingRight": 0,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "class": "IconButton",
 "paddingBottom": 0,
 "id": "component_AC00C670_B144_8176_41C6_44477F3BC072",
 "backgroundOpacity": 0,
 "right": 10,
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minHeight": 0,
 "paddingLeft": 0,
 "top": "45%",
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_AD251327_B14C_809B_41D5_679ADFCC3A8E_AlbumPlayList, 1)",
 "data": {
  "name": "IconButton25333"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/album_right.png",
 "visible": false,
 "paddingRight": 0,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "levels": [
  {
   "url": "media/panorama_ABBEC2B4_B144_81FD_41D3_119B5199E87F_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_AE186CD7_B15F_81BB_41BF_D3A6C65223C8",
 "frameCount": 9,
 "colCount": 3
}],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "height": "100%",
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "paddingRight": 0,
 "borderRadius": 0,
 "data": {
  "name": "Player18148"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
