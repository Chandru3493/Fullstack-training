import java.util.*;

public class Fibonacci {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int size = sc.nextInt();
    int first = 0;
    int second = 1;
    if (size >= 1)
      System.out.print("0 ");
    for (int i = 1; i < size; i++) {
      int next = first + second;
      System.out.print(next + " ");
      second = first;
      first = next;
    }
    sc.close();
  }
}
