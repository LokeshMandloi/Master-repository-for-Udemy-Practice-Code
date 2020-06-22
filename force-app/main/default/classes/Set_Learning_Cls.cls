public class Set_Learning_Cls {
    public static void Set_Learn(){
        Set<Integer> s1 = new Set<Integer>();
        s1.add(30);
        s1.add(20);
        s1.add(30);
        system.debug('set value0'+s1);
        
      	Set<Account> s2 = new set<Account>();
        Account a1 = new Account(Name = 'Amazon', NumberOfEmployees = 200000);
        
        Account a2 = new Account(Name = 'walmart', NumberOfEmployees = 200000);
        
        Account a3 = new Account(Name = 'Amazon', NumberOfEmployees = 2000000);
        s2.add(a1);
        s2.add(a2);
        s2.add(a3);
		System.debug('set values of s2 -->'+s2);
        
        List<Integer> li = new List<Integer>{2,3,4,5,6,2};
        s1.addAll(li);
        //li.addAll(s1);
        System.debug('s1 set values again-->'+s1);
        //System.debug('list of values-->'+li);
        System.debug(s1.contains(3));//true
        System.debug(s1.contains(333));//fales
        System.debug(s1.containsAll(li));//true
        System.debug(s1.size()); //7
        Set<Integer> s3 = s1.clone();
        System.debug('s3 set value==>'+s3);
        //s3.remove(4); //will remove 4 from the set
        System.debug('s3 set values after remove method'+s3);
		system.debug('list of set'+li);
		System.debug(s1.retainall(li)); 
        System.debug('s1==>'+s1);
        s1.removeAll(li);
        system.debug(s1);
        s2.clear();
        System.debug(s2);
        
    }   
}