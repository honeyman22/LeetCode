class Solution {
    public int lengthOfLastWord(String s) {
       
       String trimedInput = s.trim();

       int i = trimedInput.length()-1;

       int length = 0;

       while(i>=0 && trimedInput.charAt(i)!=' '){
         length++;
         i--;
       }

       return length;

    }
}