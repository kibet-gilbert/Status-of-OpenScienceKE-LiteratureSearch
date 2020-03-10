_altmetric.embed_callback({"title":"Multi-rate Poisson Tree Processes for single-locus species delimitation under Maximum Likelihood and Markov Chain Monte Carlo.","doi":"10.1093/bioinformatics/btx025","pmid":"28108445","isbns":[],"altmetric_jid":"4f6fa4e93cf058f6100023d2","issns":["1367-4803","1460-2059"],"journal":"Bioinformatics","cohorts":{"pub":4},"abstract":"In recent years, molecular species delimitation has become a routine approach for quantifying and classifying biodiversity. Barcoding methods are of particular importance in large-scale surveys as they promote fast species discovery and biodiversity estimates. Among those, distance-based methods are the most common choice as they scale well with large datasets; however, they are sensitive to similarity threshold parameters and they ignore evolutionary relationships. The recently introduced \"Poisson Tree Processes\" (PTP) method is a phylogeny-aware approach that does not rely on such thresholds. Yet, two weaknesses of PTP impact its accuracy and practicality when applied to large datasets; it does not account for divergent intraspecific variation and is slow for a large number of sequences.\nWe introduce the multi-rate PTP (mPTP), an improved method that alleviates the theoretical and technical shortcomings of PTP. It incorporates different levels of intraspecific genetic diversity deriving from differences in either the evolutionary history or sampling of each species. Results on empirical data suggest that mPTP is superior to PTP and popular distance-based methods as it, consistently yields more accurate delimitations with respect to the taxonomy (i.e., identifies more taxonomic species, infers species numbers closer to the taxonomy). Moreover, mPTP does not require any similarity threshold as input. The novel dynamic programming algorithm attains a speedup of at least five orders of magnitude compared to PTP, allowing it to delimit species in large (meta-) barcoding data. In addition, Markov Chain Monte Carlo sampling provides a comprehensive evaluation of the inferred delimitation in just a few seconds for millions of steps, independently of tree size.\nmPTP is implemented in C and is available for download at http://github.com/Pas-Kapli/mptp under the GNU Affero 3 license. A web-service is available at http://mptp.h-its.org CONTACT: Paschalia.Kapli@h-its.org, Alexandros.Stamatakis@h-its.org, Tomas.Flouri@h-its.org.","context":{"all":{"count":12617609,"mean":7.785778554526,"rank":1496776,"pct":88,"higher_than":11117835},"journal":{"count":8338,"mean":6.9301415377234,"rank":1906,"pct":77,"higher_than":6426},"similar_age_3m":{"count":262134,"mean":13.592430453243,"rank":49452,"pct":81,"higher_than":212545},"similar_age_journal_3m":{"count":195,"mean":7.2100412371134,"rank":48,"pct":75,"higher_than":147}},"authors":["P. Kapli","S. Lutteropp","J. Zhang","K. Kobert","P. Pavlidis","A. Stamatakis","T. Flouri"],"type":"article","handles":[],"altmetric_id":21484836,"schema":"1.5.4","is_oa":false,"publisher_subjects":[{"name":"Mathematical Sciences","scheme":"era"},{"name":"Biological Sciences","scheme":"era"},{"name":"Information And Computing Sciences","scheme":"era"}],"cited_by_posts_count":5,"cited_by_feeds_count":1,"cited_by_tweeters_count":4,"cited_by_accounts_count":5,"last_updated":1520538780,"score":9.08,"history":{"1y":0,"6m":0,"3m":0,"1m":0,"1w":0,"6d":0,"5d":0,"4d":0,"3d":0,"2d":0,"1d":0,"at":9.08},"url":"http://dx.doi.org/10.1093/bioinformatics/btx025","added_on":1499070291,"published_on":1484784000,"subjects":["computationalbiology"],"scopus_subjects":["Biochemistry, Genetics and Molecular Biology","Life Sciences","Physical Sciences","Computer Science","Mathematics"],"readers":{"citeulike":"0","mendeley":"196","connotea":"0"},"readers_count":196,"images":{"small":"https://badges.altmetric.com/?size=64&score=10&types=bbtttttt","medium":"https://badges.altmetric.com/?size=100&score=10&types=bbtttttt","large":"https://badges.altmetric.com/?size=180&score=10&types=bbtttttt"},"details_url":"http://www.altmetric.com/details.php?citation_id=21484836"})