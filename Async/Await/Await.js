function foo(){
  return request("http://some.url.1/?x=" + x + "&y=" + y);
}

async function main(){
  try {
    var text = await foo( 11, 31 );
    console.log( text );
  }
  catch (err) {
      console.error( err );
  }
}

main();