# Dimibadge
각종 문서에서 사용하기 위한 한국디지털미디어고등학교 배지입니다.

과별 색상은 한국디지털미디어고등학교 나무위키 문서의 [학과](https://namu.wiki/w/한국디지털미디어고등학교#s-4) 항목의 색을 사용했습니다.

## Shields.IO
배지 이미지를 포함할 필요가 없는 간단한 프로젝트의 경우 [Shields.IO](https://shields.io/#/)의 배지 링크를 이용할 수 있습니다.

### EB
```md
![badge](https://img.shields.io/badge/EB-18-fff.svg?colorA=777&colorB=424242)
```
<!-- eb -->
![badge](https://img.shields.io/badge/EB-18-fff.svg?colorA=777&colorB=424242)

### DC
```md
![badge](https://img.shields.io/badge/DC-18-fff.svg?colorA=777&colorB=ff0080)
```
<!-- dc -->
![badge](https://img.shields.io/badge/DC-18-fff.svg?colorA=777&colorB=ff0080)

### WP
```md
![badge](https://img.shields.io/badge/WP-18-fff.svg?colorA=777&colorB=9a2efe)
```
<!-- wp -->
![badge](https://img.shields.io/badge/WP-18-fff.svg?colorA=777&colorB=9a2efe)

### HD
```md
![badge](https://img.shields.io/badge/HD-18-fff.svg?colorA=777&colorB=3a01df)
```
<!-- hd -->
![badge](https://img.shields.io/badge/HD-18-fff.svg?colorA=777&colorB=3a01df)

## Badges with department and admission year
학생의 학과와 입학년도가 나타나는 배지입니다.

![EB](./examples/minimal/eb.svg)
![DC](./examples/minimal/dc.svg)
![WP](./examples/minimal/wp.svg)
![HD](./examples/minimal/hd.svg)

### Request

`/{dpt}/{year}`

| parameter | method | description |
|:----------|:-------|:------------|
| `dpt`     | `URL`  | 학과(대소문자에 상관없이 `eb`, `dc`, `wp`, `hd` 중 하나) |
| `year`    | `URL`  | 입학년도(기수) |
| `base`    | `GET`  | 과별 색상 왼쪽의 학과 필드 색(기본값은 `#777`), `#` 없이 전달 |

## Badges with name
학생의 학과와 입학년도, 이름이 나타나는 배지입니다.

![EB](./examples/named/eb.svg)
![DC](./examples/named/dc.svg)
![WP](./examples/named/wp.svg)
![HD](./examples/named/hd.svg)

### Request

`/{dpt}/{year}/{name}`

| parameter | method | description |
|:----------|:-------|:------------|
| `dpt`     | `URL`  | 학과(대소문자에 상관없이 `eb`, `dc`, `wp`, `hd` 중 하나) |
| `year`    | `URL`  | 입학년도(기수) |
| `name`    | `URL`  | 이름 |

## CLI

```bash
$ node cli.js --help

Dimibadge

  Generate badges for Dimigo related documents

Options

  --minimal department year output file      Create badge with department and admission year
  --named department year name output file   Create badge with department, admission year, name
  --help                                     Print this usage guide.
```

배지를 생성할 수 있습니다.

> usage: `node cli.js --minimal wp 18 1.svg`
