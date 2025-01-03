def no_of_words(a):
    print(a,"  len", len(a))
    strippedWord = a.strip()
    print(strippedWord)
    list1 = strippedWord.split(" ")
    list2 = []
    for i in list1 :
        if i != "":
            list2.append(i)
    print(list2)
    print(len(list2))
    print("__________________________________________________")
no_of_words("    This is a Sentence    ")

no_of_words("Hii   this is    Mohammed  Aftab Ansari ")