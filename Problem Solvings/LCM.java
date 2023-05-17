import java.util.*;

public class LCM {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt(), b = sc.nextInt();
    int gcd = 1;
    for (int i = Integer.min(a, b); i >= 1; i--) {
      if (a % i == 0 && b % i == 0) {
        gcd = i;
        break;
      }
    }
    System.out.print("LCM of the given two number is:" + ((a * b) / gcd));
    sc.close();
  }
}
