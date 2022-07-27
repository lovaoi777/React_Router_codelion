 #include<iostream>
  2 #include<string>
  3
  4 using namespace std;
  5
  6 class Password{
  7   private:
  8     string password;
  9   public:
 10     Password(string str){
 11       password = str;
 12     }
 13     bool check_password(string str){
 14       return(password == str);
 15     }
 16     void change_password(string str){
 17       password = str;
 18     }
 19     bool validate_password(string str){
 20       int num_alpha = 0;
 21       int num_digit = 0;
 22       for(int i=0;str.size(); i++ ){
 23         if(isalpha(str[i])) num_alpha++;
 24           if(isdigit(str[i])) num_digit++;
 25       }
 26       return (num_alpha > 0 && num_digit > 0);
 27     }
 28 };
 29
 30
 31 class Quiz{
 32   private:
 33     int loop;
 34   public:
 35       void solve(Password *p){
 36         string str;
 37         loop = 1;
         while(loop){
 39           cout << "패스워드를 입력해주세요 ";
 40           cin >> str;
 41           if(p->check_password(str)){
 42             cout << "맞았습니다 \n" ;
 43               change_password(p);
 44           }
 45           else{
 46             cout << " 틀렸습니다\n";
 47           }
 48
 49   }
 50 }
 51       void change_password(Password *p){
 52         string str;
 53         while(1){
 54           cout <<" 패스워드를 변경합니다 (종료x) : " ;
 55           cin >> str;
 56           if(str == "X"){
 57             loop = 0;
 58             return ;
 59 }
 60         if(p->validate_password(str)){
 61           *p  = str;
 62           cout << "패스워드가 변경되었습니다\n";
 63           return;
 64             }
 65         else{
 66           cout << "패스워드는 영문자와 숫자가 포함되어야합니다.";
 67         }
 68 }
 69 }
 70 };
 71 int main(){
 72   Password password("abc123");
 73
 74   Quiz q;
                                           