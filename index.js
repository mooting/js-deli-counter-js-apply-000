function takeANumber( line, name ) {
  line.push( name )
  return `Welcome, ${ name }. You are number ${ line.length } in line.`
}

function nowServing( line ) {
  if( line.length > 0 )
    return `Currently serving ${ line.shift() }.`
  else
    return 'There is nobody waiting to be served!'
}

function currentLine( line ) {
  if ( line.length > 0 ) {
    let phrase = `The line is currently: 1. ${ line[0] }`
    for( let i = 1; i < line.length; i++ )
      phrase = `${ phrase }, ${ i + 1 }. ${ line[i] }`
    return phrase
  } else {
    return 'The line is currently empty.'
  }
}
