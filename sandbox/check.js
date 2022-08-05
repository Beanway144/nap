G = Graph({0:[1,2], 1:[2,0], 2:[0,1]})
Aut = G.automorphism_group()
print("There are ", Aut.cardinality(), "symmetries of the graph.")