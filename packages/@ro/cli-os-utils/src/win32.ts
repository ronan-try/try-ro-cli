import shelljs from 'shelljs';

export function openWithBroswer(url: string) {
  shelljs.exec('start ' + url);
}
