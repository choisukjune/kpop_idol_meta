import data from '../../artistInfo.json';
import Image from 'next/image'
import Link from 'next/link'


var snsIcon = {
  instagram : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
  </svg>,
  facebook : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
  </svg>,
  youtube :<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
  <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
  </svg>,
  spotify :<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
  <path d="M15,3C8.4,3,3,8.4,3,15s5.4,12,12,12s12-5.4,12-12S21.6,3,15,3z M19.731,21c-0.22,0-0.33-0.11-0.55-0.22 c-1.65-0.991-3.74-1.54-5.94-1.54c-1.21,0-2.53,0.22-3.63,0.44c-0.22,0-0.44,0.11-0.55,0.11c-0.44,0-0.77-0.33-0.77-0.77 s0.22-0.77,0.66-0.77c1.43-0.33,2.861-0.55,4.401-0.55c2.53,0,4.84,0.66,6.82,1.76c0.22,0.22,0.44,0.33,0.44,0.77 C20.39,20.78,20.06,21,19.731,21z M20.94,17.921c-0.22,0-0.44-0.11-0.66-0.22c-1.87-1.21-4.511-1.87-7.37-1.87 c-1.43,0-2.751,0.22-3.74,0.44c-0.22,0.11-0.33,0.11-0.55,0.11c-0.55,0-0.881-0.44-0.881-0.881c0-0.55,0.22-0.77,0.77-0.991 c1.32-0.33,2.641-0.66,4.511-0.66c3.08,0,5.94,0.77,8.361,2.2c0.33,0.22,0.55,0.55,0.55,0.881 C21.82,17.48,21.491,17.921,20.94,17.921z M22.37,14.4c-0.22,0-0.33-0.11-0.66-0.22c-2.2-1.21-5.39-1.98-8.47-1.98 c-1.54,0-3.19,0.22-4.621,0.55c-0.22,0-0.33,0.11-0.66,0.11c-0.66,0.111-1.1-0.44-1.1-1.099s0.33-0.991,0.77-1.1 C9.39,10.22,11.26,10,13.24,10c3.41,0,6.93,0.77,9.681,2.2c0.33,0.22,0.66,0.55,0.66,1.1C23.471,13.96,23.03,14.4,22.37,14.4z"></path>
  </svg>,
  twitter:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
  </svg>,
  tiktok : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path>
  </svg>

}
var getSnsData = {
  news : async function( artist_id ){
    var _d = data[ artist_id ]
    const res = await fetch('https://openapi.naver.com/v1/search/news.json?query=' + encodeURI( _d.names.KO + " 가수" ) + '&display=10&start=1&sort=sim', {
      method: "GET",
      headers:{
        "X-Naver-Client-Id": "9UVPlZQvIgc2N0VMbJKf",
        "X-Naver-Client-Secret": "HnoxOu3K17" ,
      }
    })
    const posts = await res.json()
    //console.log(posts)
    var regex = /(&amp;|&quot;|&apos;|&nbsp;|<([^>]+)>)/ig;
    var r = [];
    posts.items.map(function(item){
      r.push(

                  <div href="#" className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  
                  </div>
                  <div className="text-lg font-medium text-gray-900">
                  <div className="mr-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-1 py-1 rounded-full bg-white text-gray-700 border">

                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 24 24">
                  <path d="M 2 3 L 2 18 C 2 19.64497 3.3550302 21 5 21 L 19 21 C 20.64497 21 22 19.64497 22 18 L 22 7 L 20 7 L 20 18 C 20 18.56503 19.56503 19 19 19 C 18.43497 19 18 18.56503 18 18 L 18 3 L 2 3 z M 4 5 L 16 5 L 16 18 C 16 18.388348 16.278986 18.657986 16.416016 19 L 5 19 C 4.4349698 19 4 18.56503 4 18 L 4 5 z M 6 7 L 6 10 L 14 10 L 14 7 L 6 7 z M 6 12 L 6 14 L 14 14 L 14 12 L 6 12 z M 6 16 L 6 18 L 14 18 L 14 16 L 6 16 z"></path>
                  </svg>
                  </div>
                  news
                  </div>
                  <h3 className="mt-1 text-sm text-gray-700">
                      <p className="mt-4 text-lg font-medium text-gray-900">{item.title.replace(regex, "")}</p>
                      <div className="mt-4 font-normal text-gray-700 dark:text-gray-400 justify-between text-sm">
                        {item.pubDate}
                      </div>
                      <div className="mt-4 font-normal text-gray-700 dark:text-gray-400 text-sm">
                        {item.description.replace(regex, "")}
                      </div>
                    </h3>
                </div>
      )
    })
    return r;
  },
  naverImage : async function( artist_id ){
    var _d = data[ artist_id ]
    const res = await fetch('https://openapi.naver.com/v1/search/image?query=' + encodeURI( _d.names.KO + " 가수" ) + '&display=20&start=1&sort=date', {
      method: "GET",
      headers:{
        "X-Naver-Client-Id": "9UVPlZQvIgc2N0VMbJKf",
        "X-Naver-Client-Secret": "HnoxOu3K17" ,
      }
    })
    const posts = await res.json()
    /*
        {
      title: '[포토] 비비, &apos;하류인생 공주의 모습을 보여드릴게요&apos;',
      link: 'http://imgnews.naver.net/image/015/2022/11/18/0004776525_001_20221118113801973.jpg',
      thumbnail: 'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/015/2022/11/18/0004776525_001_20221118113801973.jpg',
      sizeheight: '944',
      sizewidth: '630'
    },
    */
    var regex = /(&amp;|&quot;|&apos;|&nbsp;|<([^>]+)>)/ig;
    var r = [];
    posts.items.map(function(item){
      console.log(item.thumbnail)
      r.push(

        <div href="#" className="group">
                    <div  style={{position:"relative"}} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative">
            <Image 
              src={item.link}
              alt={""}
              width={400}
              height={400}
              layout="responsive"
              className="rh-full w-full object-cover object-center group-hover:opacity-75"
              objectFit="cover"
            
              />

        </div>
        <div className="mt-4 text-lg font-medium text-gray-900">
        <div className="mr-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-1 py-1 rounded-full bg-white text-gray-700 border">

        <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>

        </div>
        Image

        </div>
        <h3 className="mt-1 text-sm text-gray-700">{item.title.replace(regex,"")}</h3>
        
      </div>
      )
    })
    return r;
  },
  instagram : async function( artist_id ){
    var _d = data[ artist_id ]
    return [];
    const res = await fetch('https://www.instagram.com/' +_d.snsId.instagram+ "/?__a=1&__d=1", {
      method: "GET",
    })
    const posts = await res.json()
    console.log(posts)
    var r = [];

      if(posts.status && posts.status == "fail") return r;
      
      if( posts.graphql.user.edge_felix_video_timeline.edges ) posts.graphql.user.edge_felix_video_timeline.edges.map(function(item){
        
        var txt = "";
          if( item.node.edge_media_to_caption.edges.length > 0  ) txt = item.node.edge_media_to_caption.edges[0].node.text
          var __o = {
            img : item.node.display_url,
            txt : txt
          }
          r.push(

            <div href="#" className="group">
            <div  style={{position:"relative"}} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative">
            <Image 
              src={__o.img}
              alt={""}
              width={400}
              height={400}
              layout="responsive"
              className="rh-full w-full object-cover object-center group-hover:opacity-75"
              objectFit="cover"
            
              />
            </div>
            <div className="mt-4 text-lg font-medium text-gray-900">
              
            <div className="mr-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-1 py-1 rounded-full bg-white text-gray-700 border">

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
              </div>
              instagram
            </div>
            <h3 className="mt-1 text-sm text-gray-700">{__o.txt}</h3>
          </div>
            
          )
      })

      // _to.b = o.graphql.user.edge_follow.edges;
      // _to.c = o.graphql.user.edge_followed_by.edges;
      // _to.d = o.graphql.user.edge_media_collections.edges;
      // _to.e = o.graphql.user.edge_mutual_followed_by.edges;
/*

              <Image src={__o.img}
                  className="object-cover object-center group-hover:opacity-75"
                  layout='fill'
                  alt={""}
                  loading='lazy'
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  />
*/
if( posts.graphql.user.edge_owner_to_timeline_media.edges ) posts.graphql.user.edge_owner_to_timeline_media.edges.map(function(item){
        var txt = "";
          if( item.node.edge_media_to_caption.edges.length > 0  ) txt = item.node.edge_media_to_caption.edges[0].node.text
          var __o = {
            img : item.node.display_url,
            txt : txt
          }
          r.push(
            <div href="#" className="group">
            <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image 
              src={__o.img}
              alt={""}
              width={400}
              height={400}
              layout="responsive"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              objectFit="cover"
            
              />
            </div>
            <div className="mt-4 text-lg font-medium text-gray-900">
              
            <div className="mr-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-1 py-1 rounded-full bg-white text-gray-700 border">

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
              </div>
              instagram
            </div>
            <h3 className="mt-1 text-sm text-gray-700">{__o.txt}</h3>
          </div>

          )
      })
      _to.g = o.graphql.user.edge_related_profiles.edges;
      _to.h = o.graphql.user.edge_saved_media.edges;

    console.log( r );
    return r;
  },
  youtube : async function( artist_id ){
    var snsKey = data[ artist_id ].snsId.youtube;
    const res = await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + snsKey + '&maxResults=5&key=AIzaSyAbw5RHbmB2LGOikgoWrIEhpyBTlDz7Qec', {
      method: "GET",
      headers:{
        //"Authorization": ' Bearer AAAAAAAAAAAAAAAAAAAAADo4gQEAAAAARcU4eaVi2XP8Rl0S%2FbQCMANA8RU%3D9vCnZopmK11994WVN9yCZEfMmnI6hbHlTSWyPiBVMoWaEzzE8X',
        //"Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    })
    const posts00 = await res.json()
    //console.log("post00",posts00)
    const res01 = await fetch('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=' + posts00.items[0].id + '&key=AIzaSyAbw5RHbmB2LGOikgoWrIEhpyBTlDz7Qec' ); // 메소드와 주소 설정
    const posts01 = await res01.json()
    //console.log("post01",posts01)

    const res02 = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + posts01.items[ 0 ].contentDetails.relatedPlaylists.uploads + "&maxResults=10&key=AIzaSyAbw5RHbmB2LGOikgoWrIEhpyBTlDz7Qec")
    const posts02 = await res02.json()
    // // By returning { props: { posts } }, the Blog component
    // // will receive `posts` as a prop at build time
    console.log(posts02)
    var r = [];
    posts02.items.map(function(item,index){
      console.log(item)
      r.push(

                    <div key={index} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img src={item.snippet.thumbnails.medium.url} alt={item.title} class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                    </div>
                    <div className="mt-4 text-lg font-medium text-gray-900">
                    <div className="mr-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-1 py-1 rounded-full bg-white text-gray-700 border">

                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
                        <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                      </svg>
                    </div>
                    youtube

                    </div>
                    <h3 className="mt-1 text-sm text-gray-700"><Link href={"https://www.youtube.com/watch?v=" + item.snippet.resourceId.videoId} target="_blank">{item.snippet.title}</Link></h3>
                    
                  </div>
      )
    })
    return r;
  },
  spotify : async function( artist_id ){
    
    var client_id = '8c414bf3c2cb4373af8a6a5a1d51ce4c';
    var client_secret = '222d5b240d8e4d62846b81b00ca64285';
    
    var postData = new URLSearchParams({
      'grant_type': 'client_credentials',
      'client_id' :client_id,
      'client_secret' : client_secret
    }); 

    var snsKey = data[ artist_id ].snsId.spotify;
    const res = await fetch('https://accounts.spotify.com/api/token', {
      "method" : "POST",
      "encoding": "utf8",
      //"followRedirect": true,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "cache": "no-cache", // no-store, reload, no-cache
      "body" :postData,
    })

    const posts00 = await res.json()
    
    const res01 = await fetch('https://api.spotify.com/v1/artists/' + snsKey + '/albums?limit=10&offset=0', {
      method: 'GET',
      headers:{
          "Authorization": ' Bearer ' + posts00.access_token,
          //"Accept": 'application/json',
          "Content-Type": 'application/json'
      }
    })
    const posts01 = await res01.json()
    console.log("post01",posts01)
    var r = [];
    posts01.items.map(function(item){
      r.push(

              <div href="#" className="group">
                
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={item.images[1].url} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
              </div>
              <div className="mt-4 text-lg font-medium text-gray-900">
                
              <div className="mr-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-1 py-1 rounded-full bg-white text-gray-700 border">

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
                <path d="M15,3C8.4,3,3,8.4,3,15s5.4,12,12,12s12-5.4,12-12S21.6,3,15,3z M19.731,21c-0.22,0-0.33-0.11-0.55-0.22 c-1.65-0.991-3.74-1.54-5.94-1.54c-1.21,0-2.53,0.22-3.63,0.44c-0.22,0-0.44,0.11-0.55,0.11c-0.44,0-0.77-0.33-0.77-0.77 s0.22-0.77,0.66-0.77c1.43-0.33,2.861-0.55,4.401-0.55c2.53,0,4.84,0.66,6.82,1.76c0.22,0.22,0.44,0.33,0.44,0.77 C20.39,20.78,20.06,21,19.731,21z M20.94,17.921c-0.22,0-0.44-0.11-0.66-0.22c-1.87-1.21-4.511-1.87-7.37-1.87 c-1.43,0-2.751,0.22-3.74,0.44c-0.22,0.11-0.33,0.11-0.55,0.11c-0.55,0-0.881-0.44-0.881-0.881c0-0.55,0.22-0.77,0.77-0.991 c1.32-0.33,2.641-0.66,4.511-0.66c3.08,0,5.94,0.77,8.361,2.2c0.33,0.22,0.55,0.55,0.55,0.881 C21.82,17.48,21.491,17.921,20.94,17.921z M22.37,14.4c-0.22,0-0.33-0.11-0.66-0.22c-2.2-1.21-5.39-1.98-8.47-1.98 c-1.54,0-3.19,0.22-4.621,0.55c-0.22,0-0.33,0.11-0.66,0.11c-0.66,0.111-1.1-0.44-1.1-1.099s0.33-0.991,0.77-1.1 C9.39,10.22,11.26,10,13.24,10c3.41,0,6.93,0.77,9.681,2.2c0.33,0.22,0.66,0.55,0.66,1.1C23.471,13.96,23.03,14.4,22.37,14.4z"></path>
                </svg>
                </div>
                spotify
              </div>
              <h3 className="mt-1 text-sm text-gray-700"><Link href={item.external_urls.spotify} target="_blank">{item.name}</Link></h3>
            </div>
      )
    })
    return r;
  },
}

const Logic = async ({ params }) => {
  console.log( params.slug )
  
    
  var result = [];
  var s,so;
  for( s in data[ params.slug ].snsId ){
    
    if( getSnsData[ s ] )
    {
      
      var r = await getSnsData[ s ]( params.slug  ); 
      
      var i = 0,iLen = r.length,io;
      for(;i<iLen;++i){
        io = r[ i ];
        result.push( io )
      }
    }

  }

  var r = await getSnsData[ "news" ]( params.slug  ); 
      
  var i = 0,iLen = r.length,io;
  for(;i<iLen;++i){
    io = r[ i ];
    result.push( io )
  }

  var r = await getSnsData[ "naverImage" ]( params.slug  ); 
      
  var i = 0,iLen = r.length,io;
  for(;i<iLen;++i){
    io = r[ i ];
    result.push( io )
  }


  var tags=[];
  var z,zo;
  for( z in data[ params.slug ].sns ){
    zo = data[ params.slug ].sns[ z ];
    tags.push(
      <div className="mr-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-2 rounded-full bg-white text-gray-700 border">

      {snsIcon[z]?snsIcon[z] : z}
      </div>

    )
  }

return (

    

<div class="bg-white">
  
<div class="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

  <div class="hero-headline flex flex-col mb-10 items-center justify-center text-center">
    <svg className="mb-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path fill="none" stroke="#00796b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M3.5 34.5C3.5 29.253 7.753 24 13 24M44.5 14.5c0 5.247-4.253 9.5-9.5 9.5M19.5 36.5L19.5 44.5M28.5 36.5L28.5 44.5"></path><path fill="#00bfa5" d="M34,37H14c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h20c1.105,0,2,0.895,2,2v30 C36,36.105,35.105,37,34,37z"></path><path fill="#e0f2f1" d="M32,19H16c-0.552,0-1-0.448-1-1V7c0-0.552,0.448-1,1-1h16c0.552,0,1,0.448,1,1v11 C33,18.552,32.552,19,32,19z"></path><path fill="#212121" d="M18.5 9A1.5 1.5 0 1 0 18.5 12 1.5 1.5 0 1 0 18.5 9zM29.5 9A1.5 1.5 0 1 0 29.5 12 1.5 1.5 0 1 0 29.5 9z"></path><path fill="none" stroke="#212121" stroke-miterlimit="10" d="M26.5,13c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5"></path><path fill="#212121" d="M15 21H27V23H15zM32 21A1 1 0 1 0 32 23 1 1 0 1 0 32 21z"></path><path fill="#76ff03" d="M33 26A1 1 0 1 0 33 28A1 1 0 1 0 33 26Z"></path><path fill="#ffea00" d="M17 25H19V31H17z"></path><path fill="#ffea00" d="M17 25H19V31H17z" transform="rotate(-90 18 28)"></path><path fill="#212121" d="M18 35h-2c-.552 0-1-.448-1-1l0 0c0-.552.448-1 1-1h2c.552 0 1 .448 1 1l0 0C19 34.552 18.552 35 18 35zM24 35h-2c-.552 0-1-.448-1-1l0 0c0-.552.448-1 1-1h2c.552 0 1 .448 1 1l0 0C25 34.552 24.552 35 24 35z"></path><path fill="#ff3d00" d="M30.5 30A2.5 2.5 0 1 0 30.5 35A2.5 2.5 0 1 0 30.5 30Z"></path><path fill="#84ffff" d="M28 25L26 28 30 28z"></path>
    </svg>
    <h1 class=" font-bold text-3xl text-gray-900">K-POP IDOL META</h1>
    <p class=" font-base text-base text-gray-600">Search for your favorite artist and check the information!</p>
  </div>


  <div class="box mb-10">
      <div class="box-wrapper">

          <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
            <button class="outline-none focus:outline-none"><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
            <input type="search" name=""  placeholder="search for images" x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
            <div class="select">
              <select name="" id="" x-model="image_type" class="text-sm outline-none focus:outline-none bg-transparent">
                <option value="all" selected>All</option>
                <option value="photo">Photo</option>
                <option value="illustration">Illustration</option>
                <option value="vector">Vector</option>
                </select>
            </div>
          </div>
        
      </div>
  </div>

  <div role="list" className="divide-y divide-gray-100">
    <div className="flex min-w-0 gap-x-4 mb-10 ">
      
      <img className="h-12 w-12  object-cover object-center group-hover:opacity-75 rounded-full bg-gray-50" src={data[ params.slug ].imgUrl} alt=""/>
      
      <div className="min-w-0 flex-auto">
        <p className="flex text-lg font-semibold leading-6 text-gray-900">{data[ params.slug ].names.KO}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
        </p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data[ params.slug ].names.EN}</p>
      </div>

      <div className="shrink-0 sm:flex sm:items-end">
        <div className="flex flex-wrap mt-1 text-sm text-gray-700 sm:flex sm:items-end">{tags}</div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-gray-900 mb-10">Collections</h2>

  <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  {
    result
  }
  </div>
</div>
</div>
)

}

export default Logic;




