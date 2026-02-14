# [level 5] 시험장 나누기 - 81305 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/81305?language=python3) 

### 성능 요약

메모리: 21.6 MB, 시간: 255.92 ms

### 구분

코딩테스트 연습 > 2021 카카오 채용연계형 인턴십

### 채점결과

정확성: 30.0<br/>효율성: 70.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 02월 14일 17:34:06

### 문제 설명

<p><strong>[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]</strong></p>

<p>카카오 인턴을 선발하는 코딩 테스트 시험장이 하나의 이진 트리<sup id="fnref1"><a href="#fn1">1</a></sup> 형태로 연결되어 있습니다. 아래 그림은 12개의 시험장이 연결된 예시입니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/cf7517dd-e241-4fc8-a134-1d4d31f082b2/img1.png" title="" alt="img1.png"></p>

<ol>
<li> 하나의 노드는 하나의 시험장을 나타냅니다.</li>
<li><p>검은 바탕의 흰 숫자는 해당 시험장의 고유 번호(ID)를 나타냅니다.</p>

<p>2-1. 시험장이 n개 있다면, 시험장의 고유 번호는 0부터 n-1까지 부여됩니다.</p></li>
<li><p>노드 안의 빨간 숫자는, 해당 시험장의 응시자 수를 나타냅니다.</p>

<p>3-1. 위의 그림에서, 9번 시험장에는 10명, 4번 시험장에는 8명, 6번 시험장에는 20명의 응시자가 시험을 볼 예정입니다.</p></li>
<li><p>노드 사이의 간선은 해당 시험장이 연결되어 있음을 의미합니다.</p>

<p>4-1. 위의 그림에서, 9번 시험장은 7번 시험장과, 7번 시험장은 6번 시험장과 연결되어 있습니다.</p></li>
</ol>

<p>코딩 테스트를 총괄하는 무지는 안정적인 시험을 위해, 시험장에서 오는 트래픽을 <code>k</code>개의 그룹으로 나누어 각 그룹별 서버로 분산시키기로 하였습니다. 시험장 사이를 연결한 간선들 중 <code>k-1</code>개를 끊어서 시험장을  <code>k</code> 개의 그룹으로 나눌 계획입니다. 이때, 그룹별 최대 트래픽을 최소화하기 위하여 <strong>가장 큰 그룹의 인원을 최소화시켜야 합니다.</strong></p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/736fc6c6-0ec5-429b-99b4-304233bc19ff/img2.png" title="" alt="img2.png"></p>

<p>위의 그림에서 7번과 6번 시험장을 잇는 간선을 끊고, 9번과 7번 시험장을 잇는 간선을 끊는다면, 전체 시험장은 3개의 그룹으로 나누어집니다.</p>

<ul>
<li>주황색 노드로 표시된 A그룹의 인원은 35명(10+8+5+6+1+1+4)</li>
<li>보라색 노드로 표시된 B그룹의 인원은 37명(7+30)</li>
<li>녹색 노드로 표시된 C그룹의 인원은 40명(20+8+12)</li>
</ul>

<p>즉, 인원이 가장 많은 그룹은 40명입니다. 다른 어떤 방법으로 시험장을 3개의 그룹으로 나눈다고 해도, 인원이 가장 많은 그룹의 인원이 40명 미만이 되도록 나눌 수는 없습니다.</p>

<p>나눌 그룹의 수를 나타내는 정수 <code>k</code>, 각 시험장의 응시자 수를 나타내는 1차원 정수 배열 <code>num</code>, 시험장의 연결 상태를 나타내는 2차원 정수 배열 <code>links</code>가 매개변수로 주어집니다. 인원이 가장 많은 그룹의 인원이 최소화되도록 <code>k</code>개의 그룹으로 나누었을 때, 최소화된 최대 그룹의 인원을 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>k</code> ≤ 10,000</li>
<li> <code>k</code> ≤ <code>num</code>의 길이 ≤ 10,000

<ul>
<li><code>num[i]</code>에는 i번 시험장의 응시자 수가 담겨있습니다.</li>
<li>1 ≤ <code>num</code>의 원소 ≤ 10,000</li>
</ul></li>
<li> <code>links</code>의 길이 = <code>num</code>의 길이 

<ul>
<li><code>links</code>의 i번째 행은 i번 노드(시험장)의 [왼쪽 자식 노드 번호, 오른쪽 자식 노드 번호]입니다.

<ul>
<li>해당 위치에 자식 노드가 없는 경우 <code>-1</code>이 담겨있습니다.</li>
<li>  잘못된 노드 번호나, 하나의 이진 트리 구조가 아닌 입력은 주어지지 않습니다.<br></li>
</ul></li>
</ul></li>
</ul>

<h5>정확성 테스트 케이스 제한 사항</h5>

<ul>
<li>1 ≤ <code>k</code> ≤ 20</li>
<li> <code>k</code> ≤ <code>num</code>의 길이 ≤ 20</li>
</ul>

<h5>효율성 테스트 케이스 제한 사항</h5>

<ul>
<li>주어진 조건 외 추가 제한사항 없습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>k</th>
<th>num</th>
<th>links</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>[12, 30, 1, 8, 8, 6, 20, 7, 5, 10, 4, 1]</td>
<td>[[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 5], [2, 10], [3, 0], [6, 1], [11, -1], [7, 4], [-1, -1], [-1, -1]]</td>
<td>40</td>
</tr>
<tr>
<td>1</td>
<td>[6, 9, 7, 5]</td>
<td>[[-1, -1], [-1, -1], [-1, 0], [2, 1]]</td>
<td>27</td>
</tr>
<tr>
<td>2</td>
<td>[6, 9, 7, 5]</td>
<td>[[-1, -1], [-1, -1], [-1, 0], [2, 1]]</td>
<td>14</td>
</tr>
<tr>
<td>4</td>
<td>[6, 9, 7, 5]</td>
<td>[[-1, -1], [-1, -1], [-1, 0], [2, 1]]</td>
<td>9</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>문제 예시와 같습니다.</p>

<p><strong>입출력 예 #2</strong></p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/9accb8ee-00f3-44ad-b788-b1e9eb138d43/img3.png" title="" alt="img3.png"></p>

<ul>
<li>나눌 그룹의 수가 1개 이므로, 주어진 트리를 나눌 수 없습니다.</li>
<li>보라색 노드로 표시된 유일한 그룹의 인원은 27명입니다.<br></li>
</ul>

<p><strong>입출력 예 #3</strong></p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/e212604c-035d-469c-8f37-9b0a4cfdf7b3/img4.png" title="" alt="img4.png"></p>

<ul>
<li>나눌 그룹의 수가 2개 이므로, 그림과 같이 1개의 간선을 끊어서 2개의 그룹으로 나눌 수 있습니다.</li>
<li>보라색 노드로 표시된 그룹은 13명, 주황색 노드로 표시된 그룹은 14명입니다.</li>
<li>따라서, 최대 그룹의 인원은 14명입니다.</li>
</ul>

<p><strong>입출력 예 #4</strong></p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d4a11541-e66b-4beb-a60a-fadcca3ca1d0/img5.png" title="" alt="img5.png"></p>

<ul>
<li>나늘 그룹의 수가 4개 이므로, 그림과 같이 3개의 모든 간선을 끊어서 4개의 그룹으로 나눌 수 있습니다.</li>
<li>최대 그룹의 인원은 9명입니다.</li>
</ul>

<hr>

<h5>제한시간 안내</h5>

<ul>
<li>정확성 테스트 : 10초</li>
<li>효율성 테스트 : 언어별로 작성된 정답 코드의 실행 시간의 적정 배수</li>
</ul>

<div class="footnotes">
<hr>
<ol>

<li id="fn1">
<p>이진 트리 : 모든 노드들의 자식 노드가 두 개 이하인 트리&nbsp;<a href="#fnref1">↩</a></p>
</li>

</ol>
</div>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges