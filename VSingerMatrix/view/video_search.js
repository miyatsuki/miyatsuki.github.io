getSearchResult = function(singer_list, videoId_map, search_threashold_ratio){
	result = []

	search_threashold = singer_list.length * search_threashold_ratio
	/*
	if(document.getElementById("search-type").group1[0].checked){
	  search_threashold = singer_list.length/1;
	}else if(document.getElementById("search-type").group1[1].checked){
	  search_threashold = singer_list.length/2
	}else if(document.getElementById("search-type").group1[2].checked){
	  search_threashold = singer_list.length/4
	}else{
	  search_threashold = singer_list.length/singer_list.length;
	}
	*/

	song_singer_map = {}
	for(var i = 0; i < singer_list.length; i++){
	  singer = singer_list[i]
	  for(song in this.videoId_map[singer]){
		if(!song_singer_map[song]){
		  song_singer_map[song] = []
		}
		song_singer_map[song].push(singer)
	  }
	}

	for(song in song_singer_map){
	  if(song_singer_map[song].length >= search_threashold){
		for(var j = 0; j < song_singer_map[song].length; j++){
		  singer = song_singer_map[song][j]
		  result.push({singer: singer, song: song, video_id: videoId_map[singer][song], popularity: song_singer_map[song].length*100.0/singer_list.length})
		}
	  }
	}
	return result
}
