import java.util.*;

public class LeapYearCal {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int year = sc.nextInt();
    System.out
        .print(((year % 4 == 0 && year % 100 != 1) || (year % 400 == 0)) ? "Yes it's a Leap Year" : "Not an Leap Year");
    sc.close();
  }
}
