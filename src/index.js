module.exports = function check(str, bracketsConfig) {

  let brackets = bracketsConfig.map(x => { return x[0] + x[1] })

  for (let i = 0; i < brackets.length; i++) {
    if(str.includes(brackets[i])){
      str = str.replace(brackets[i],'')
      i= -1
    }

  }

  return (str.length == 0)
}
