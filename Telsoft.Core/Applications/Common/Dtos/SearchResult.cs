using Nest;
using System.Collections.Generic;

namespace Telsoft.Core.Applications.Common.Dtos
{
    public class SearchResult<T> where T : class
    {
        private readonly ISearchResponse<T> _response;

        public long Total => _response.Total;
        public long Took => _response.Took;
        public IReadOnlyCollection<T> Documents => _response.Documents;
        public double MaxScore => _response.MaxScore;

        public SearchResult(ISearchResponse<T> response)
        {
            _response = response;
        }
    }
}
