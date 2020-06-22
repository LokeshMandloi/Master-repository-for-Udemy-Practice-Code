public class Map_learning_cls {
    public static void map_learning(){
        Map<string,string> m1 = new Map<string,string>();
        m1.put('1','Red');
        m1.put('2','organge');
        m1.put('3','green');
        m1.put('4','yellow');
        m1.put('5','yellow');
        
        String value = m1.get('1');//to get the values of the key
        System.debug('value of apple->'+value);
        System.debug('all values of map -->'+m1);// will get the whole map
        
        System.debug('All the keys in the map ==>'+m1.KeySet());
        System.debug('All the values in the map ==>'+m1.values());
        System.debug('Does key banana exist in the map ==>'+m1.containsKey('3'));
        System.debug('value for the the 3 '+m1.get('3'));
        for(String x : m1.keyset()){
            System.debug('value of map in sequence ==>'+m1.get(x));
        }
        
        //===============================================================
        //Map of Map
        //===============================================================
        Map<String,String> m4 = new Map<String,String>();
        Map<Integer,Map<String,String>> mss = new Map<Integer,Map<String,String>>();
        mss.put(1, new Map<String,String>{'apple'=>'Red'});
        mss.put(2, new Map<String,String>{'orange'=>'Red','banana'=>'yellow'});

        System.debug('map of map value'+mss);
        for(Integer i : mss.keyset()){
            System.debug('map size external map'+mss.size());
            System.debug('map size internal map'+mss.get(i).size());
            System.debug('Enter in first loop');
        	System.debug('values of map mss==>'+mss.get(i));
            System.debug('key set of internal map ==>'+mss.get(i).keySet());
            for(String keyofsecondmap : mss.get(i).keySet()){
                System.debug('Entered in the second loop');
                System.debug('value of the internal map '+mss.get(i).get(keyofsecondmap));
            }
        }
    }
}