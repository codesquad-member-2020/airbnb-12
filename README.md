# airbnb-12
숙소예약 서비스 - 12팀

* BE: [Ragdoll](https://github.com/MuseopKim), [Mocha](https://github.com/sedin2)
* FE: [Sally](https://github.com/sally4405), [baekCo](https://github.com/baekCode)

<br>

### Scrum
- 매일 오전 11시
- 오프라인 또는 행아웃으로 진행
- 스크럼 내용
  - 현재 컨디션
  - 구현 상황
  - 오늘의 목표

<br>

## Branch Rule

* `master`: 배포 브랜치
* `dev`: 디폴트 브랜치
* 작업을 시작할 때: 자신의 클래스 개발 브랜치에서 `feature-<클래스>/issue-<이슈번호>`로 브랜치 생성
  * `feature-BE/issue-XXX` : 백엔드 피쳐 개발 브랜치
  * `feature-FE/issue-XXX` : 프론트엔드 피쳐 개발 브랜치
* PR 메시지에 `Closed #n` 등을 포함시켜 이슈를 닫는다.
* 머지를 완료했으면 기능(feature)브랜치는 github과 local git에 모두 삭제한다.

<br>

## Commit Message Rules

```
타입 :이모지: 설명
ex) 
feat :rocket: 기능 추가
```

| 타입 | 이모지 | 설명 |
|--|--|--|
|feat|:rocket: `:rocket:`|새로운 기능 추가|
|fix|:pushpin: `:pushpin:`|버그 수정|
|docs|:page_facing_up: `:page_facing_up:`|문서 수정|
|refactor|:recycle: `:recycle:`|코드 리팩토링|
|style|:art: `:art:`|코드 포맷팅 (코드 변경이 없는 경우)|
|test|:checkered_flag: `:checkered_flag:` |테스트 코드 작성|
|chore|:sparkles: `:sparkles:`|소스 코드를 건들지 않는 작업(빌드 업무 수정)|

<br>

## Issue 및 Pull Request 네이밍 규칙

* Issue 네이밍: [클래스] 제목
* Pull Request 네이밍: [클래스] 제목

<br>

## Wiki Contents
- [Daily Scrum](https://docs.google.com/spreadsheets/d/10amLogahdfPcyGIhygeNcZSitleVu6PGBHNSAQ657Xg/edit?usp=sharing)
- [API Document](https://github.com/codesquad-member-2020/airbnb-12/wiki/API-Document)
- [BE 요구사항 분석](https://github.com/codesquad-member-2020/airbnb-12/wiki/BE-%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%B6%84%EC%84%9D-%EB%B0%8F-%EA%B8%B0%EB%8A%A5-%EC%A0%95%EB%A6%AC)
- [FE 요구사항 분석](https://github.com/codesquad-member-2020/airbnb-12/wiki/FE-%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%B6%84%EC%84%9D)
