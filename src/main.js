export default function (source) {
  const lines = source.split(/\r\n|\r|\n/);
  lines.forEach((line,idx)=>{
    if(/^\s*mi-Kenya-Hara\s*:\s*2000000CNY;?\s*$/i.test(line)){
      lines[idx] = line.replace(/mi-Kenya-Hara\s*:\s*2000000CNY;?/,'border-radius:19px;');
    }
  })
  return lines.join('\r\n');
}
