유저 추가
create user '유저명'@'접속허용할 IP' identified by '유저비밀번호';
create user 'mainbrain'@'172.30.1.16' identified by '1234';


유저 권한 추가
grant all privileges on DB명.Table명 to '유저명'@'접속허용할 IP' with grant option;
허용할 IP가 어느 곳에서도 가능토록 한다면 IP주소 대신 %


유저 삭제
drop user '유저명'@'접속할 IP';


유저 비밀번호 변경
SET PASSWORD FOR 'user'@'host' = PASSWORD('newpass'); 
