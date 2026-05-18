import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../data/issues_repository.dart';
import '../../domain/models/issue_model.dart';
import 'package:intl/intl.dart';

final issuesProvider = FutureProvider<List<IssueModel>>((ref) async {
  final repo = ref.watch(issuesRepositoryProvider);
  return repo.getIssues();
});

class HomeDashboard extends ConsumerStatefulWidget {
  const HomeDashboard({super.key});

  @override
  ConsumerState<HomeDashboard> createState() => _HomeDashboardState();
}

class _HomeDashboardState extends ConsumerState<HomeDashboard> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    final issuesAsync = ref.watch(issuesProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('CampusPulse'),
        actions: [
          IconButton(
            icon: const Icon(Icons.person),
            onPressed: () {
              // TODO: Navigate to profile
            },
          ),
        ],
      ),
      body: issuesAsync.when(
        data: (issues) {
          if (issues.isEmpty) {
            return const Center(child: Text('No issues reported yet.'));
          }
          return RefreshIndicator(
            onRefresh: () async {
              ref.invalidate(issuesProvider);
            },
            child: ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: issues.length,
              itemBuilder: (context, index) {
                final issue = issues[index];
                return _buildIssueCard(context, issue);
              },
            ),
          );
        },
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (err, stack) => Center(child: Text('Error: $err')),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          context.push('/report');
        },
        child: const Icon(Icons.add),
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        onDestinationSelected: (index) {
          setState(() {
            _currentIndex = index;
          });
          if (index == 1) {
             context.push('/map');
          }
        },
        destinations: const [
          NavigationDestination(icon: Icon(Icons.list), label: 'Feed'),
          NavigationDestination(icon: Icon(Icons.map), label: 'Map'),
          NavigationDestination(icon: Icon(Icons.notifications), label: 'Alerts'),
        ],
      ),
    );
  }

  Widget _buildIssueCard(BuildContext context, IssueModel issue) {
    Color statusColor = Colors.grey;
    if (issue.status == 'Reported') statusColor = Colors.orange;
    if (issue.status == 'In Progress') statusColor = Colors.blue;
    if (issue.status == 'Resolved') statusColor = Colors.green;

    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      child: InkWell(
        onTap: () {
          // context.push('/issue/${issue.id}');
        },
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Chip(
                    label: Text(
                      issue.status,
                      style: const TextStyle(color: Colors.white, fontSize: 12),
                    ),
                    backgroundColor: statusColor,
                    padding: EdgeInsets.zero,
                  ),
                  Text(
                    DateFormat('MMM dd, hh:mm a').format(issue.createdAt),
                    style: Theme.of(context).textTheme.bodySmall,
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                issue.title,
                style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 4),
              Text(
                issue.locationName,
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(color: Colors.grey[600]),
              ),
              const SizedBox(height: 8),
              Text(
                issue.description,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
              const SizedBox(height: 12),
              Row(
                children: [
                  const Icon(Icons.thumb_up_alt_outlined, size: 16),
                  const SizedBox(width: 4),
                  Text('${issue.upvotes}'),
                  const SizedBox(width: 16),
                  const Icon(Icons.comment_outlined, size: 16),
                  const SizedBox(width: 4),
                  const Text('0'),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
